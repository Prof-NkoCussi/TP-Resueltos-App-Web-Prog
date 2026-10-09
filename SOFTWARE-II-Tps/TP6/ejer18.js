// Importamos Express para crear el servidor web.
const express = require("express");

// Importamos Figlet para generar carteles con letras ASCII.
const figlet = require("figlet");

// Creamos una aplicación utilizando Express.
const app = express();

// Guardamos nuestro nombre en una variable.
let nombre = "Prof. Nicolas Cussi";

// Creamos una función que recibe un texto como parámetro.
function mostrarCartel(texto) {

    // Convertimos el texto en un cartel ASCII con Figlet.
    // La etiqueta <pre> permite conservar los espacios y saltos de línea.
    // return devuelve el cartel en formato HTML.
    return `<pre>${figlet.textSync(texto)}</pre>`;
}

// Definimos una ruta para la página principal del servidor.
// Cuando alguien accede a "/", se ejecuta esta función.
app.get("/", (req, res) => {

    // Enviamos una página HTML al navegador.
    res.send(`
        <html>
            <head>
                <meta charset="UTF-8">
                <title>Servidor de carteles</title>
            </head>

            <body>
                <!-- Mostramos el nombre utilizando nuestra función. -->
                ${mostrarCartel(nombre)}
                ${mostrarCartel("Software II")}

                <!-- Volvemos a utilizar la función con un mensaje diferente. -->
                ${mostrarCartel("Vamos 5to!")}
            </body>
        </html>
    `);
});

// Ponemos el servidor en funcionamiento en el puerto 3000.
app.listen(3000, () => {

    // Mostramos un mensaje en la terminal para confirmar que el servidor inició.
    console.log("Servidor iniciado en http://localhost:3000");

});