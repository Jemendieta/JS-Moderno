// Métodos para los Objetos = object methods
// Haremos que un objeto se comporte como una constante, de tal forma que no pueda ser modificado

// "use strict" : exige que se cumplan ciertas reglas al momento de escribir nuestro código
"use strict";

const producto = {
  nombre: "monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};
// método freeze(): el cual evita que un objeto sea modificado, no permite hacer nada con el objeto
Object.freeze(producto);

// ahora intetaremos modificar el valor disponible de nuestro objeto
producto.disponible = false;

console.log(producto); // nos devolverá un error pues el método freeze no permite modificaciones.

// Cómo sabemos si un objeto está congelado o no?
console.log(Object.isFrozen(producto)); // devuelve true (congelado) o false (no congelado).
