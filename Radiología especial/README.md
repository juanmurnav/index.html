# Radiología especial

Tests por capítulo del libro *Técnicas de radiología especial* (Arán Ediciones), para preparar la OPE de Técnico Especialista en Radiodiagnóstico de Osasunbidea.

**Versión 2 (noviembre de 2026).** Los 1.400 tests se han rehecho desde cero y sustituyen a los de la versión anterior de esta carpeta (que sigue disponible en el historial de git). Se ha comprobado automáticamente, comparando enunciado y respuesta, que ninguna pregunta repite una de la versión anterior; cuando un dato del libro ya estaba preguntado, ahora se pregunta desde otro ángulo (caso práctico, cálculo, pregunta inversa o «señale la INCORRECTA»).

- 7 capítulos × 8 tests × 25 preguntas = **1.400 preguntas nuevas**.
- Estilo y dificultad de los exámenes TER de Navarra (2006, 2019, 2023 y 2025), Osakidetza (2012) y Cantabria (2024): enunciados cortos con cuatro opciones, preguntas de «señale la INCORRECTA», casos prácticos y cálculos sencillos (ley del inverso del cuadrado, T score y Z score, IMC, límites de dosis restantes en el año o en el quinquenio), valores de referencia (kV, mAs, ayunos, calibres de aguja, osmolaridades, tiempos de revelado) y numeración dental FDI.
- Cuando el contenido del libro no da para 200 preguntas, se completa con conocimiento estándar de examen (BI-RADS del ACR, criterios OMS/ISCD de densitometría, notación FDI, errores de colocación en ortopantomografía, normativa española vigente).
- Cada test tiene modo estudio (explicación inmediata) o modo examen, y orden aleatorio opcional. La respuesta correcta se reparte al 25 % entre A, B, C y D (50 de cada letra por capítulo) y la opción correcta solo es la más larga en un 23-32 % de las preguntas, para que la longitud no delate la respuesta.
- Mismo motor y formato que el resto del repositorio (plantilla con `EXAM_BANK`, selector de tests, informe por apartados y repaso de falladas). La clave de `localStorage` es nueva (`radesp-v2-…`), así que el progreso de la versión anterior no se mezcla.

| Cap. | Archivo | Apartados |
|---|---|---|
| 1 | Cap01_Exploraciones_radiologicas_del_aparato_digestivo.html | Telemando y preparación, medios de contraste digestivos, esofagograma y EED, tránsito intestinal y enema opaco, vía biliar y páncreas, glándulas salivales |
| 2 | Cap02_Exploraciones_radiologicas_del_sistema_genitourinario.html | Equipos de fluoroscopia y dosis, propiedades de los contrastes yodados, clasificación y uso de los contrastes, urografía intravenosa, cistografía y uretrocistografía, histerosalpingografía |
| 3 | Cap03_Obtencion_de_imagenes_radiologicas_del_sistema_vascular.html | Angio-TC, angio-RM, angiografía y semiología vascular, sala, técnicas y protección en intervencionismo, intervencionismo vascular por territorios, intervencionismo no vascular y biopsias |
| 4 | Cap04_Realizacion_de_mamografias.html | Indicaciones, cribado y BI-RADS, mamógrafo y obtención de la imagen, información a la paciente y proyecciones estándar, proyecciones adicionales y prótesis, intervencionismo y galactografía, control de calidad y dosimetría |
| 5 | Cap05_Exploracion_radiologica_intraoral_y_ortopantomografica.html | Anatomía dental y numeración FDI, equipos intraorales y protección, proyecciones intraorales y posicionadores, revelado y calidad intraoral, ortopantomógrafo, receptores, calidad y errores en ortopantomografía |
| 6 | Cap06_Exploraciones_radiologicas_con_equipos_portatiles_y_moviles.html | Equipos portátiles, protección radiológica en portátiles y quirófano, proyecciones y técnica portátil, arco en C, quirófano (áreas, condiciones, esterilidad y posiciones), receptores, calidad y posprocesado |
| 7 | Cap07_Densitometria_osea.html | Fundamentos y equipos, osteoporosis e indicaciones, técnica DXA de columna y cadera, antebrazo, cuerpo entero, QTC y QUS, valoración (T score, Z score y FRAX), artefactos, calidad y protección |

## Normativa aplicada (vigente a noviembre de 2026)

| Concepto | Valor |
|---|---|
| Trabajador expuesto, dosis efectiva | 20 mSv por año oficial (RD 1029/2022, art. 11); hasta 50 mSv en un año solo en circunstancias especiales autorizadas, sin superar una media de 20 mSv/año en cinco años |
| Cristalino, trabajador | 100 mSv en 5 años oficiales consecutivos, con un máximo de 50 mSv en un año (exigible desde el 22-06-2024) |
| Piel (promediada en 1 cm²) y extremidades, trabajador | 500 mSv por año oficial |
| Embarazo | Tras comunicarlo, dosis al feto tan baja como sea razonablemente posible e improbable que supere 1 mSv hasta el final del embarazo |
| Personas en formación de 16-18 años | 6 mSv efectiva · 15 mSv cristalino · 150 mSv piel/extremidades |
| Público (acompañantes, otros pacientes) | 1 mSv efectiva · 15 mSv cristalino · 50 mSv piel |
| Categoría A | Puede superar 6 mSv/año efectiva, 15 mSv cristalino o 150 mSv piel/extremidades |
| Zonas | Controlada: posibilidad de superar 6 mSv/año; vigilada: más de 1 mSv/año sin llegar a controlada |
| Exposiciones médicas | RD 601/2019: justificación y optimización; el paciente no tiene límites de dosis |
| Calidad en radiodiagnóstico | RD 1976/1999, todavía en vigor; el nuevo real decreto de calidad y seguridad en radiodiagnóstico seguía en tramitación en noviembre de 2026 |
| Instalación de equipos de rayos X (incluidos dentales y portátiles) | RD 1085/2009 |

El RD 783/2001 está derogado desde el 22-12-2022: los límites antiguos (por ejemplo, 150 mSv/año en cristalino o 100 mSv en 5 años de dosis efectiva) solo aparecen como opciones incorrectas.

## Desactualizaciones, erratas y discrepancias del libro tratadas en las preguntas

- **Cap. 1, ángulo hepático en el enema opaco**: el libro lo obtiene en decúbito lateral izquierdo; Bontrager lo despliega en oblicua PA derecha (OAD) y el esplénico en OAI. Las preguntas indican si siguen «el libro» o a Bontrager.
- **Cap. 3, ventajas de la angio-TC**: el libro las enumera bajo el epígrafe «Respecto a la angio-RM»; las preguntas las presentan como ventajas de la angio-TC frente a la angio-RM.
- **Cap. 6, posición del arco en C**: en una página el libro escribe «intensificador abajo y tubo arriba», en contradicción con su apartado de protección radiológica (tubo bajo la mesa e intensificador arriba). Las preguntas siguen el criterio de protección: tubo abajo.
- **Cap. 6, fórmula de la dosis**: el libro escribe «tasa de dosis = dosis × tiempo»; lo correcto es dosis = tasa de dosis × tiempo.
- **Cap. 7, vértebras lumbares**: el libro valora la media L2-L4; las guías ISCD actuales usan L1-L4. Las preguntas dicen «según el libro» y la explicación lo aclara.
- **Cap. 7, rotación de la cadera**: el libro indica 30° de rotación interna; se pregunta como dato del libro.
- **Cap. 7, umbral de osteoporosis**: el libro escribe «inferior a −2,5 DE»; la OMS define osteoporosis con T ≤ −2,5. Las preguntas siguen el criterio de la OMS.
- **Cap. 7, dosis de la DXA**: el texto escaneado muestra «1 Sv»; el valor correcto es 1-30 µSv. La QTC lumbar, del orden de 50-60 µSv, es la técnica densitométrica de más dosis.
- **Cap. 7, triángulo de Ward**: el libro lo distingue en el análisis de la cadera, pero la ISCD no lo usa para el diagnóstico (cuello femoral y cadera total).
- **Cap. 4, consentimiento**: el libro indica que la mamografía no precisa consentimiento salvo en embarazo y procedimientos intervencionistas.
