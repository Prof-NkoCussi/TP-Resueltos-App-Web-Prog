// figlet nos da funciones para convertir texto en letras ASCII gigantes.
const figlet = require("figlet");

// Traemos las variables nombre, curso y colegio desde ejer13.js
// Gracias al module.exports que pusimos ahí, podemos usarlas acá directo.
const { nombre, curso, colegio } = require("./ejer13.js"); 

// Usamos las variables que trajimos de ejer13.js
console.log(figlet.textSync(nombre));
//console.log(figlet.textSync(curso));
//console.log(figlet.textSync(colegio));