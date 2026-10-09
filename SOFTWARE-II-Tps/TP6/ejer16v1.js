
// figlet nos da funciones para convertir texto en letras ASCII gigantes.
const figlet = require("figlet");

const nombre = "Prof. Nicolás Cussi";
const curso = "5°1° y 5°2°";
const colegio = "CTP - OBA";

console.log(figlet.textSync(nombre));
console.log(figlet.textSync(curso));
console.log(figlet.textSync(colegio));