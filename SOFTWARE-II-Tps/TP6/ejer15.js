// figlet nos da funciones para convertir texto en letras ASCII gigantes.
const figlet = require("figlet");

// figlet.textSync recibe un texto y devuelve ese mismo texto
// convertido en letras ASCII. Con console.log lo mostramos en pantalla.
console.log(figlet.textSync("Nicolas"));