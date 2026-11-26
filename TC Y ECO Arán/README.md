# TC Y ECO Arán

Tests por capítulo del libro *Técnicas de tomografía computarizada y ecografía* (Arán Ediciones), para preparar la OPE de Técnico Especialista en Radiodiagnóstico de Osasunbidea.

**Noviembre de 2026.** Colección nueva hecha desde cero. La carpeta anterior del mismo libro («Técnicas de TC Y ECO Arán») se mantiene sin cambios. Se ha comprobado automáticamente, comparando enunciado y respuesta, que ninguna pregunta de esta carpeta repite una de aquella. Cuando un dato del libro ya estaba preguntado allí, aquí se pregunta desde otro ángulo: caso práctico, cálculo, pregunta inversa o «señale la INCORRECTA».

- 6 capítulos × 8 tests × 25 preguntas = **1.200 preguntas nuevas**.
- Estilo y dificultad de los exámenes TER de Navarra (2006, 2019, 2023 y 2025), Osakidetza (2012) y Cantabria (2024): enunciados cortos con cuatro opciones, preguntas de «señale la INCORRECTA», casos prácticos y cálculos sencillos (pitch y tiempo de adquisición, volumen de contraste por kilo, gramos de yodo, osmolaridad, índice de resistencia Doppler, longitud de onda, segundo armónico, dosis restantes en el año o en el quinquenio), valores de referencia (UH, ventanas, ayunos, filtrados glomerulares, frecuencias de los transductores) y normativa.
- Cada test tiene modo estudio (explicación inmediata) o modo examen, y orden aleatorio opcional. La respuesta correcta se reparte al 25 % entre A, B, C y D (50 de cada letra por capítulo). La opción correcta solo es la más larga en un 17-25 % de las preguntas, y la más corta en un 10-20 %, para que la longitud no delate la respuesta.
- Mismo motor y formato que el resto del repositorio (plantilla con `EXAM_BANK`, selector de tests, informe por apartados y repaso de falladas). La clave de `localStorage` es propia (`tcyeco-aran-cNN-…`), así que el progreso no se mezcla con el de la carpeta antigua.

| Cap. | Archivo | Apartados |
|---|---|---|
| 1 | Cap01_Preparacion_de_la_exploracion_en_TC.html | Puesta en marcha, calibración y control de calidad · equipo de TC: componentes y evolución · material de la sala y requisitos de preparación · parámetros de exploración y dosimetría · estados del paciente y pacientes especiales · riesgos laborales y protección radiológica (RD 1029/2022) |
| 2 | Cap02_Administracion_de_medios_de_contraste_en_TC.html | Clasificación de los medios de contraste · vías de administración e indicaciones · contraindicaciones, alergias y nefrotoxicidad · reacciones adversas y su tratamiento · consentimiento informado y cuidados tras la prueba · bombas de inyección y material de emergencia |
| 3 | Cap03_Realizacion_de_la_exploracion_tomografica.html | Petición, justificación y protocolos · posición, orientación y dispositivos · preparación del equipo, centraje y topograma · parámetros de adquisición · protocolos por regiones anatómicas · angio-TC, TC cardiaca, perfusión y ficha dosimétrica |
| 4 | Cap04_Obtencion_de_la_imagen_en_las_exploraciones_tomograficas.html | Números TC y densidad radiológica · ventanas de visualización · reconstrucción y filtros de convolución · posprocesado y reconstrucciones 3D · artefactos en TC · calidad de imagen y presentación del estudio |
| 5 | Cap05_Identificacion_del_uso_clinico_de_los_ultrasonidos.html | Física y propagación de los ultrasonidos · modo B, Doppler y modos de representación · ecogenicidad y lesiones sólidas y líquidas · transductores, frecuencia y resolución · artefactos ecográficos · ecopotenciadores, ventajas, limitaciones y aplicaciones |
| 6 | Cap06_Protocolo_de_la_exploracion_ecografica.html | Solicitud de la exploración y consentimiento · preparación del paciente · posicionamiento y técnica de exploración · tipos de transductores y modo armónico · cuidado, limpieza y desinfección de las sondas · protocolos, intervencionismo y archivo de imágenes |

## Normativa aplicada (vigente a noviembre de 2026)

| Concepto | Valor |
|---|---|
| Reglamento de protección radiológica | RD 1029/2022, que traspone la Directiva 2013/59/Euratom. El RD 783/2001 está derogado desde el 22-12-2022 |
| Trabajador expuesto, dosis efectiva | 20 mSv por año oficial (art. 11). Ya no se permite promediar 100 mSv en cinco años |
| Cristalino, trabajador | 100 mSv en 5 años oficiales consecutivos, con un máximo de 50 mSv en un año (exigible desde el 22-06-2024) |
| Piel (promediada en 1 cm²) y extremidades, trabajador | 500 mSv por año oficial |
| Embarazo | Tras comunicarlo, dosis al feto tan baja como sea razonablemente posible e improbable que supere 1 mSv hasta el final del embarazo |
| Lactancia | No se asignan puestos con riesgo de contaminación radiactiva |
| Personas en formación de 16-18 años | 6 mSv efectiva · 15 mSv cristalino · 150 mSv piel/extremidades (mayores de 18: límites de trabajador) |
| Público (acompañantes, otros pacientes) | 1 mSv efectiva · 15 mSv cristalino · 50 mSv piel |
| Categoría A | Puede superar 6 mSv/año efectiva, 15 mSv cristalino o 150 mSv piel/extremidades. Vigilancia sanitaria cada 12 meses |
| Zonas | Controlada: posibilidad de superar 6 mSv/año; vigilada: más de 1 mSv/año sin llegar a controlada. Trébol gris azulado (vigilada), verde (controlada), amarillo (permanencia limitada), naranja (permanencia reglamentada) y rojo (acceso prohibido) |
| Historial dosimétrico | Hasta que el trabajador cumpla 75 años y nunca menos de 30 años tras el cese |
| Exposiciones médicas | RD 601/2019: justificación y optimización, niveles de referencia diagnósticos en TC (CTDIvol y DLP), preguntar por un posible embarazo. El paciente no tiene límites de dosis |
| Calidad en radiodiagnóstico | RD 1976/1999, todavía en vigor; el nuevo real decreto seguía en tramitación en noviembre de 2026 |
| Consentimiento informado | Ley 41/2002: verbal por regla general y por escrito en procedimientos invasores o de riesgo (biopsias, contraste); revocable por escrito; mayoría de edad sanitaria a los 16 años, salvo actuaciones de grave riesgo |
| Contraste yodado | Guías ESUR: metformina solo se suspende con filtrado < 30 ml/min/1,73 m² o fracaso renal agudo; observación de unos 30 minutos tras la inyección |

## Desactualizaciones, erratas y discrepancias del libro tratadas en las preguntas

- **Cap. 1, metformina**: el libro manda suspenderla siempre antes del contraste; la ESUR actual solo con filtrado < 30 o fracaso renal agudo.
- **Cap. 1, CTDIvol**: el libro incluye la longitud explorada entre los factores del CTDIvol; en realidad la longitud influye en el DLP, no en el CTDIvol.
- **Cap. 1, protección radiológica**: el libro enumera medidas (blindajes, dosimetría individual y de área, radiación dispersa) pero no da límites de dosis. Las preguntas los añaden según el RD 1029/2022, y los valores del RD 783/2001 derogado (150 mSv/año en cristalino, 100 mSv en 5 años de dosis efectiva) solo aparecen como opciones incorrectas.
- **Cap. 2, nefropatía por contraste**: el libro la define como un aumento de creatinina mayor del 25 % y pide analítica a todos. La ESUR habla de lesión renal aguda poscontraste (aumento ≥0,3 mg/dl o ≥1,5 veces el valor basal en 48-72 h) y limita el cribado del filtrado a los pacientes de riesgo.
- **Cap. 2, observación tras el contraste**: el libro indica vigilar los primeros 15-20 minutos; la ESUR, unos 30.
- **Cap. 2 y cap. 6, consentimiento de menores**: el libro fija los 18 años; la Ley 41/2002 sitúa la mayoría de edad sanitaria en los 16, salvo en actuaciones de grave riesgo.
- **Cap. 3, sociedad científica**: el libro escribe «SERAMI»; las siglas correctas son SERAM.
- **Cap. 6, modo armónico y contraste**: el libro dice que las microburbujas emiten «sonidos lineales no armónicos»; en realidad la imagen con contraste se basa en su respuesta no lineal. Las preguntas se limitan a que el modo armónico es imprescindible en la ecografía con contraste.
