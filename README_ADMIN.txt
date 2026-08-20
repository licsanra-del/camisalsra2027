FORMULARIO DE CAMISETAS — VERSIÓN 3.0 CON ADMINISTRACIÓN

NOVEDADES
---------
- Formulario público conectado a Cloud Firestore.
- Imágenes personalizadas de camisetas.
- Una elección por identificación.
- Panel administrativo en admin.html.
- Inicio de sesión mediante Firebase Authentication (correo + contraseña).
- Lectura de resultados desde Firestore.
- Resumen de votos.
- Filtros por nombre/identificación, sección y camiseta.
- Descarga CSV de los resultados visibles.
- Fecha y hora de cada elección.

PASO 1 — HABILITAR AUTHENTICATION
---------------------------------
En Firebase Console:
  Authentication > Comenzar > Sign-in method

Habilite:
  Email/Password

PASO 2 — CREAR USUARIO ADMINISTRADOR
------------------------------------
En Firebase Console:
  Authentication > Users > Add user

Cree un usuario administrador con el correo y contraseña que prefiera.

IMPORTANTE:
La contraseña NO se guarda en el proyecto web. Firebase Authentication
la administra directamente.

PASO 3 — ACTUALIZAR REGLAS DE FIRESTORE
---------------------------------------
En:
  Firestore Database > Rules

Copie todo el contenido de:
  firestore.rules

y presione Publicar.

Las reglas permiten:
- Usuario público: crear una elección válida una sola vez.
- Usuario autenticado: leer la colección "elecciones".
- Nadie desde la web: modificar o borrar votos.

PASO 4 — PUBLICAR
-----------------
Suba todos los archivos del proyecto a GitHub Pages o a su hosting.

Formulario:
  index.html

Administración:
  admin.html

DESCARGA
--------
El botón "Descargar CSV" exporta los registros que estén visibles según
los filtros activos. El archivo puede abrirse directamente en Excel.

SIGUIENTE MEJORA POSIBLE
------------------------
- Exportación directa a XLSX.
- Gráficos de resultados.
- Total de estudiantes pendientes por votar.
- Filtro por sección con porcentajes.
- Usuario administrador específico mediante UID.
- Opción administrativa para anular/reabrir votos.
