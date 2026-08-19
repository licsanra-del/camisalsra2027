FORMULARIO DE ELECCIÓN DE CAMISETA — VERSIÓN 1.0

Contenido
---------
- index.html: formulario para estudiantes.
- admin.html: resultados locales y exportación CSV.
- data.js: lista de 230 estudiantes obtenida del Excel.
- app.js: lógica de búsqueda y registro.
- styles.css: diseño adaptable a celular y computadora.

Cómo probar
-----------
1. Abra index.html en Chrome o Edge.
2. Digite una identificación existente en la lista.
3. El sistema mostrará automáticamente el nombre y la sección.
4. Seleccione una camiseta y pulse "Enviar elección".
5. Abra admin.html para ver los resultados.

IMPORTANTE
----------
Esta versión 1.0 utiliza localStorage. Es decir, los votos se guardan
solamente en el navegador/dispositivo donde se realizan las pruebas.

Esto permite comprobar toda la interfaz y el flujo antes de conectar
una base de datos central.

Para utilizarlo con todos los estudiantes desde distintos teléfonos,
la siguiente versión debe conectar el formulario a Firebase/Firestore
u otra base de datos central.

Personalización
---------------
Las camisetas A, B, C y D son marcadores visuales temporales.
En la siguiente versión pueden sustituirse por las fotografías o
diseños reales de las camisetas.
