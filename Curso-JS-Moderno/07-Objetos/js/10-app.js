// ¿Cómo unir dos objetos?
"use strict";

const producto = {
  nombre: "monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};

const medidas = {
  peso: "1kg",
  medida: "1m",
};

console.log(producto);
console.log(medidas);

// Ahora unimos los dos objetos
// Primera forma
const union = Object.assign(producto, medidas); // assign nos permite unir dos objetos
console.log(union); // nos devuelve los dos objetos en uno solo

// con spread operator o Rest operator
// con los tres puntos lo que indicamos es que queremos una copia del objeto a continuación de los tres puntos
// es la más utilizada
const unionDos = { ...producto, ...medidas }; // unimos ambos objetos
console.log(unionDos);
