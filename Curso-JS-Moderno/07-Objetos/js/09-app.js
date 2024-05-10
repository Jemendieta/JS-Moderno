// Sellar objetos
"use strict";

const producto = {
  nombre: "monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};

/*
método seal(): 
Impide que se agreguen o eliminen las propiedades de un objeto, 
pero si permite modificar las existentes.
*/
Object.seal(producto);
producto.disponible = false;
console.log(producto); // nos devolvera disponible : false
console.log(Object.isSealed(producto)); // Devuelve true (sellado) o false (no sellado)
