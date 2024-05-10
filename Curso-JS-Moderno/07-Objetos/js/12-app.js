// Object Constructor
// la siguiente estructura se corresponde con una declaración object literal
// se limita a ls valores que ya de por si tiene declarados
"use strict";

const producto = {
  nombre: "monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};

// object constructor
// creamos una función y declaramos nuestros valores para el nuevo objeto
function Producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
  this.disponible = true; // este valor no lo pasamos como parámetro pues está implícito
}

// hacemos uso de new para (object constructor) ingresar valores a nuestro objeto
const producto2 = new Producto("Monitor", 500);
console.log(producto2);

const producto3 = new Producto("zapatillas", 29);
console.log(producto3);

//  de esta manera tendríamos un estructura a la que solo haría falta declararle valores
// Esto hace que sea mucho más dinámico crear objetos de esta forma
// Algo a considerar es que el object literal es mucho más usado que el object constructor
