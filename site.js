/* ==========================================================================
   Banco de exámenes — utilidades compartidas
   Lee el contenido de una carpeta del repo vía la API de GitHub, para que
   cualquier archivo .html que subas aparezca automáticamente en el listado
   sin tener que tocar este código.
   ========================================================================== */

const GH_OWNER = 'juanmurnav';
const GH_REPO = 'index.html';
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutos

/**
 * Devuelve los archivos .html de una carpeta del repo (sin index.html),
 * usando sessionStorage como caché para no gastar el límite de peticiones
 * de la API pública de GitHub al navegar de una página a otra.
 */
async function fetchFolderFiles(folder){
  const cacheKey = `gh-list:${folder}`;
  try{
    const cached = sessionStorage.getItem(cacheKey);
    if(cached){
      const parsed = JSON.parse(cached);
      if(Date.now() - parsed.ts < CACHE_TTL_MS) return parsed.files;
    }
  }catch(e){ /* almacenamiento no disponible, seguimos sin caché */ }

  const url = `https://api.github.com/repos/${GH_OWNER}/${GH_REPO}/contents/${encodeURIComponent(folder)}`;
  const res = await fetch(url, { headers: { Accept: 'application/vnd.github.v3+json' } });

  if(!res.ok){
    let msg = 'No se pudo cargar el listado de esta carpeta.';
    if(res.status === 403) msg = 'Se alcanzó el límite de peticiones a la API de GitHub. Espera unos minutos y recarga.';
    if(res.status === 404) msg = 'Todavía no existe esta carpeta en el repositorio.';
    const err = new Error(msg);
    err.status = res.status;
    throw err;
  }

  const data = await res.json();
  if(!Array.isArray(data)) throw new Error('Respuesta inesperada de la API de GitHub.');

  const files = data
    .filter(f => f.type === 'file' && f.name.toLowerCase().endsWith('.html') && f.name.toLowerCase() !== 'index.html')
    .map(f => ({ name: f.name, size: f.size }))
    .sort((a, b) => a.name.localeCompare(b.name, 'es'));

  try{ sessionStorage.setItem(cacheKey, JSON.stringify({ ts: Date.now(), files })); }catch(e){}

  return files;
}

/** "osakidetza_2002_modelo_b.html" -> "Osakidetza 2002 Modelo B" */
function prettyName(filename){
  let name = filename.replace(/\.html$/i, '');
  name = name.replace(/[_-]+/g, ' ').trim().replace(/\s+/g, ' ');
  name = name.split(' ').map(w => {
    if(w.length > 1 && w === w.toUpperCase()) return w; // conserva siglas: INGESA, TER…
    if(/^[0-9]/.test(w)) return w;
    return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
  }).join(' ');
  return name;
}

function prettySize(bytes){
  if(!bytes) return '';
  const kb = bytes / 1024;
  return kb < 1 ? `${bytes} B` : `${Math.round(kb)} KB`;
}

const ICON_DOC = '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h6"/></svg>';
const ICON_ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

/** Pinta la lista de archivos dentro de un contenedor dado su [folder]. */
async function renderFileList({ folder, listEl, countEl, searchEl }){
  listEl.innerHTML = `
    <div class="skeleton-row"></div>
    <div class="skeleton-row"></div>
    <div class="skeleton-row"></div>`;

  let files = [];
  try{
    files = await fetchFolderFiles(folder);
  }catch(err){
    listEl.innerHTML = `<div class="state-msg is-error">⚠️ ${err.message}</div>`;
    if(countEl) countEl.textContent = '—';
    return;
  }

  if(countEl){
    const n = files.length;
    countEl.textContent = `${n} test${n === 1 ? '' : 's'} disponible${n === 1 ? '' : 's'}`;
  }

  function paint(items){
    if(items.length === 0){
      listEl.innerHTML = `<div class="state-msg">No hay tests que coincidan con la búsqueda.</div>`;
      return;
    }
    listEl.innerHTML = items.map(f => `
      <a class="file-card" href="${encodeURI(f.name)}">
        <span class="file-badge">${ICON_DOC}</span>
        <span class="file-info">
          <span class="file-title">${escapeHtml(prettyName(f.name))}</span>
          <span class="file-meta">${prettySize(f.size)}</span>
        </span>
        <span class="file-arrow">${ICON_ARROW}</span>
      </a>
    `).join('');
  }

  paint(files);

  if(searchEl){
    searchEl.addEventListener('input', () => {
      const q = searchEl.value.trim().toLowerCase();
      const filtered = q
        ? files.filter(f => prettyName(f.name).toLowerCase().includes(q))
        : files;
      paint(filtered);
    });
  }
}

function escapeHtml(str){
  return str.replace(/[&<>"']/g, ch => ({
    '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
  }[ch]));
}
