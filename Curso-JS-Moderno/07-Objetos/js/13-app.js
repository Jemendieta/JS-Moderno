// Object, keys, values, entries
/*
.keys() : nos devuelve las llaves de nuestro objeto
.values() : nos devuelve los valores de nuestro objeto
.entries() : retorna todo el objeto (llaves y valores)
*/

"use strict";

const producto = {
  nombre: "monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};

console.log(Object.keys(producto));
console.log(Object.values(producto));
console.log(Object.entries(producto));
