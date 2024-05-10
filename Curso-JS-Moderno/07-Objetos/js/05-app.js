// Agregar objetos dentro de un objeto.
const producto = {
  nombre: "monitor 20 pulgadas",
  precio: 300,
  disponible: true,
  // agregamos un objeto dentro de otro
  informacion: {
    peso: "1kg",
    medida: "1m",
  },
};

console.log(producto);
console.log(producto.informacion); // Accedemos al nuevo objeto con la sistaxix de punto
console.log(producto.informacion.peso); // Accedemos a los valores del nuevo objeto
