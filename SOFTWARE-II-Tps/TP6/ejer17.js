// figlet nos da funciones para convertir texto en letras ASCII gigantes.
const figlet = require("figlet");

// textSync acepta un segundo parámetro: un objeto de opciones.
// Con { font: "..." } le decimos con qué tipografía ASCII dibujar el texto.
// Cada fuente da un estilo de letra distinto, aunque el texto sea el mismo.
console.log(figlet.textSync("Hola", { font: "Standard" }));
console.log(figlet.textSync("Hola", { font: "Ghost" }));
console.log(figlet.textSync("Hola", { font: "Slant" })); 