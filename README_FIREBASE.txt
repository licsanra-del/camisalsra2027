FORMULARIO DE CAMISETAS — VERSIÓN 2.0 FIREBASE

OBJETIVO
--------
Esta versión reemplaza el almacenamiento local de la versión 1.0 por
Cloud Firestore.

Cada registro queda guardado en la colección:

    elecciones

La identificación del estudiante se usa como ID del documento.

Ejemplo:
    elecciones / 209260929

Campos guardados:
    identificacion
    nombre
    seccion
    camiseta
    fechaHora

La fechaHora se genera con serverTimestamp(), es decir, con la hora
registrada por el servidor de Firebase.

PASO 1 — CREAR / SELECCIONAR PROYECTO FIREBASE
------------------------------------------------
1. Entre a Firebase Console.
2. Cree un proyecto nuevo o abra el proyecto que utilizará.
3. Registre una aplicación Web.
4. Copie el objeto firebaseConfig.

PASO 2 — CONFIGURAR EL SITIO
----------------------------
Abra:
    firebase-config.js

Reemplace los valores REEMPLAZAR por los datos que Firebase le entrega.

PASO 3 — CREAR CLOUD FIRESTORE
------------------------------
En Firebase Console:
    Compilación / Build > Firestore Database > Crear base de datos

Seleccione una ubicación apropiada y cree la base.

PASO 4 — PUBLICAR REGLAS
------------------------
En Firestore:
    Reglas / Rules

Copie el contenido del archivo:
    firestore.rules

y presione Publicar.

Estas reglas permiten que el formulario cree una elección una sola vez
por identificación y evitan que el formulario público pueda leer,
editar o borrar los resultados.

PASO 5 — PROBAR
---------------
IMPORTANTE:
Por usar módulos ES de Firebase, no abra index.html directamente con
doble clic (file://). Pruébelo mediante un servidor web, GitHub Pages,
Firebase Hosting, Live Server de Visual Studio Code, etc.

En GitHub Pages funcionará normalmente una vez publicado.

SIGUIENTE ETAPA
---------------
La versión administrativa agregará:
- Inicio de sesión del administrador.
- Lectura segura de la colección elecciones.
- Tabla general.
- Filtros por sección y camiseta.
- Totales.
- Fecha y hora.
- Descarga Excel/CSV.
- Posible eliminación o reapertura de una elección por administrador.


IMÁGENES DE CAMISETAS
---------------------
La carpeta "imagenes" contiene:
    camiseta-a.jpg
    camiseta-b.jpg
    camiseta-c.jpg
    camiseta-d.jpg

Para cambiar una camiseta en el futuro:
1. Prepare la nueva imagen en formato JPG.
2. Póngale exactamente uno de esos nombres.
3. Reemplace el archivo dentro de la carpeta "imagenes".
4. Vuelva a publicar el sitio.

No es necesario cambiar el código HTML, JavaScript ni Firebase.

Además, el estudiante puede tocar/clicar una imagen para verla ampliada.
