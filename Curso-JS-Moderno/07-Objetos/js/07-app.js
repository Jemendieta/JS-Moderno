// Problema con los objetos
const producto = {
  nombre: "monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};

// los objetos, a diferencia de las variables, se pueden reasignar.
// ejemplo
producto.disponible = false;
console.log(producto.disponible); // devolverá false, hemos reasignado su valor

//  incluso podemos eliminar
delete producto.precio;
console.log(producto);
