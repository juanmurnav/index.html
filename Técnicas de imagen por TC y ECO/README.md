# Técnicas de imagen por TC y ECO

Tests por capítulo del libro *Técnicas de imagen por TC y ECO* (Salvador Marín Lillo, Editorial Síntesis), para preparar la OPE de Técnico Especialista en Radiodiagnóstico de Osasunbidea.

- 10 capítulos × 8 tests × 25 preguntas = **2.000 preguntas nuevas**, redactadas desde cero (no reutilizan preguntas de otras carpetas del repositorio).
- El estilo y la dificultad siguen los exámenes TER de Navarra (2006, 2019, 2023 y 2025), Osakidetza (2012) y Cantabria (2024): enunciados cortos con cuatro opciones, preguntas de «señale la INCORRECTA», cálculos sencillos (pitch, tiempos, profundidad del eco), valores de referencia (UH, frecuencias de sonda, fases de contraste, ayunos) y preguntas basadas en las autoevaluaciones del libro.
- Cada test tiene modo estudio (explicación inmediata) o modo examen, y orden aleatorio opcional. La respuesta correcta se reparte al 25 % entre A, B, C y D (50 de cada letra por capítulo) y la opción correcta solo es la más larga en un 20-30 % de las preguntas.
- Mismo motor y formato que el resto del repositorio (plantilla con `EXAM_BANK`, selector de tests, informe por apartados y repaso de falladas).

| Cap. | Archivo | Apartados |
|---|---|---|
| 1 | Cap01_Introduccion_a_la_tecnica_de_TC.html | Papel del técnico y concepto de TC, radiaciones y rayos X, tomografía lineal y principio de la TC, generaciones de equipos, TC secuencial/helicoidal/multicorte, nuevos equipos |
| 2 | Cap02_Preparacion_de_la_exploracion_tomografica.html | Unidad y sala de TC, equipo y material, puesta en marcha y calibración, petición y consentimiento, pacientes especiales, protección radiológica y riesgos laborales |
| 3 | Cap03_Realizacion_de_la_exploracion_tomografica.html | Etapas y posicionamiento, consola y topograma, parámetros de exposición, pitch/FOV/canales, protocolos de cabeza a tórax, abdomen y angio-TC |
| 4 | Cap04_Tecnicas_de_administracion_de_contrastes_en_TC.html | Clasificación, bario y yodados, vías, indicaciones y contraindicaciones, reacciones adversas y emergencias, bomba de inyección y cuidados |
| 5 | Cap05_Obtencion_de_la_imagen_tomografica_y_posprocesado.html | Evolución de la imagen, algoritmos, matriz/píxel/vóxel, UH y ventanas, posprocesado, DICOM y PACS |
| 6 | Cap06_Calidad_y_artefactos_de_la_imagen_tomografica.html | Resolución espacial, contraste/ruido/linealidad/uniformidad, artefactos físicos, del paciente y técnicos, control de calidad |
| 7 | Cap07_Introduccion_a_la_tecnica_de_exploracion_ecografica.html | Papel del técnico, sonido y piezoelectricidad, propiedades físicas, interacción con los tejidos, ecógrafo y transductor, haz y consola |
| 8 | Cap08_La_imagen_ecografica.html | Obtención de la imagen y sondas, modos A/B/M, Doppler, ecogenicidad, ecopotenciadores y control de calidad, artefactos |
| 9 | Cap09_La_exploracion_ecografica.html | Ventajas e inconvenientes, efectos biológicos y ALARA, indicaciones, solicitud y preparación, exploración y cortes, registro e informe |
| 10 | Cap10_Protocolos_de_exploracion_ecografica.html | Técnicas especiales (3D/4D, elastografía, Doppler tisular, fusión), protocolo general y ventanas, abdomen, mama/tórax/corazón, musculoesquelético e intervencionismo |

## Normativa aplicada (vigente a noviembre de 2026)

| Concepto | Valor |
|---|---|
| Trabajador expuesto, dosis efectiva | 20 mSv por año oficial (RD 1029/2022; sin promedio quinquenal, salvo exposición especialmente autorizada) |
| Cristalino, trabajador | 100 mSv en 5 años oficiales consecutivos, máx. 50 mSv en un año (exigible desde el 22-06-2024) |
| Piel (por cm²) y extremidades, trabajador | 500 mSv/año |
| Embarazo | Feto ≤ 1 mSv desde la comunicación del embarazo; en lactancia, sin puestos con riesgo significativo de contaminación |
| Personas en formación de 16-18 años | 6 mSv efectiva · 15 mSv cristalino · 150 mSv piel/extremidades |
| Público | 1 mSv efectiva · 15 mSv cristalino · 50 mSv piel |
| Categoría A | Puede superar 6 mSv/año efectiva, 15 mSv cristalino o 150 mSv piel/extremidades |
| Zonas | Vigilada (> 1 mSv/año, trébol gris azulado) y controlada (> 6 mSv/año, trébol verde); amarillo permanencia limitada, naranja permanencia reglamentada, rojo acceso prohibido |
| Exposiciones médicas | RD 601/2019: justificación, optimización, NRD en CTDIvol y DLP; el paciente no tiene límites de dosis |
| Calidad en radiodiagnóstico | RD 1976/1999 (sigue en vigor a falta de la aprobación del nuevo real decreto en tramitación) |
| Ecografía | No usa radiación ionizante: no le aplican los límites del RD 1029/2022; ALARA, índices térmico (TI) y mecánico (MI) como buena práctica |
| Consentimiento | Ley 41/2002: verbal por regla general y escrito en procedimientos invasores o de riesgo (contraste IV, ecopotenciador, intervencionismo ecoguiado); mayoría de edad sanitaria a los 16 años; revocación por escrito |

El RD 783/2001 está derogado desde el 22-12-2022.

## Desactualizaciones y erratas del libro tratadas en las preguntas

En estos casos la pregunta indica si se refiere a «lo que dice el libro» o a la normativa o guía vigente, y la explicación da el dato actual.

- **Límite de dosis de trabajadores**: se usa el RD 1029/2022 (20 mSv por año oficial, cristalino 100 mSv/5 años), no los valores anteriores.
- **Metformina y contraste**: el libro indica suspenderla siempre; las guías ESUR actuales solo la suspenden si el FGe es < 30 ml/min/1,73 m² o hay lesión renal aguda.
- **Nefropatía por contraste**: la ESUR habla de lesión renal aguda poscontraste (aumento de creatinina ≥ 0,3 mg/dl o ≥ 1,5 veces el basal en 48-72 h); hidratación profiláctica sobre todo con FGe < 30; la N-acetilcisteína no tiene eficacia demostrada y ya no se programa diálisis tras el contraste.
- **Observación tras el contraste**: la ESUR recomienda unos 30 minutos.
- **Reacción previa al contraste**: además de la premedicación del libro, las guías dan prioridad a cambiar a otro contraste.
- **Consentimiento**: el libro lo plantea siempre por escrito y por los padres en menores de 18; la Ley 41/2002 lo fija verbal por regla general (escrito en procedimientos invasivos o de riesgo) y lo atribuye al propio paciente desde los 16 años, salvo grave riesgo.
- **Dosis del paciente en la ficha**: el libro habla de mSv; los equipos registran CTDIvol y DLP (NRD del RD 601/2019).
- **Radiación natural**: el libro da 3-4 mSv/año; UNSCEAR estima una media mundial de unos 2,4 mSv/año.
- **ICPR**: el libro escribe «ICPR»; la sigla correcta es ICRP.
- **Factor Q del transductor**: el libro escribe «estrecho» entre paréntesis para Q bajo; Q bajo equivale a banda ancha.
- **Pitch > 1**: el libro dice que deja tejido sin estudiar; las preguntas lo marcan como «según el libro».
- **Aliasing**: en un párrafo el libro dice «disminuyendo la PRF»; lo correcto (como recoge su propia lista) es aumentar la PRF o escala de velocidad.
- **Ángulo Doppler**: el libro escribe «60 %», pero se refiere a 60°.
