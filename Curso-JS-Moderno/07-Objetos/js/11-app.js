// Funciones en Objetos, acceder a sus valores, This dentro de los objetos
// la palabra this hace referencia a los valores que existen dentro del mismo objeto
"use strict";

const producto = {
  nombre: "monitor 20 pulgadas",
  precio: 300,
  disponible: true,
  mostrarInfo: function () {
    console.log(
      `El producto: ${this.nombre} tiene un precio de: ${this.precio}` // this busca ambos valores dentro del mismo objeto
    );
  },
};

producto.mostrarInfo();

// crear un segundo objeto con las mismas características (llaves y función) no sería problema gracias a this
const producto2 = {
  nombre: "monitor 20 pulgadas",
  precio: 300,
  disponible: true,
  mostrarInfo: function () {
    console.log(
      `El producto: ${this.nombre} tiene un precio de: ${this.precio}` // this busca ambos valores dentro del mismo objeto
    );
  },
};

producto2.mostrarInfo();

/* NOTA
- this es una palabra reservada
- this es una forma de referirse al objeto en si mismo
- this se mantiene dentro del ámbito en el cual ha sido creado
*/
