// Ejercicios 13 — Datos con variables + template literals
const nombre = "Prof. Nicolás Cussi";
const curso = "5°1° , 5°2° y 7mo Año";
const colegio = "CTP - OBA";

// Ejercicio 13: todo combinado en un solo mensaje con template literals
console.log("");
console.log(`Soy ${nombre}, de los cursos ${curso}, en el ${colegio}.`);
console.log("");

module.exports = { nombre, curso, colegio }; // Esta línea permite que otros archivos usen estas variables con require()
// Sin esto, nombre/curso/colegio solo existirían dentro de este archivo