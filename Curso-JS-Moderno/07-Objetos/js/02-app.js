// Como acceder a los valores de un objeto?
// recordemos que un objeto es como múltiples variables en una sola.

const producto = {
  nombre: "monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};

console.log(producto);

// cómo accedemos a los valores edl objeto?
// primera forma: haciendo uso edl punto
console.log(producto.nombre);
console.log("El preciom del producto es: " + producto.precio + " soles");

// segunda forma: usando corchetes y comillas
// no es tan usada

console.log(producto["nombre"]);
console.log(producto["precio"]);
