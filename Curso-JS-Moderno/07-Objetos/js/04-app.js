// Asignar valores de un objeto a una variable.

const producto = {
  nombre: "monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};

console.log(producto.nombre);

// asignaremos el valor del objeto a una variable
// esta es una forma de hacerlo
const nombre = producto.nombre;
console.log(nombre);

// forma recomendada: object destructuring (crea la variable y extrae el valor)
// con esto le decimos que cree una variable y  estraiga una propiedad y su valor en un solo paso.
// Es la forma arecomendada de asignar valores de un objeto a una variable.
const { precio, disponible } = producto;
console.log(precio);
console.log(disponible);
