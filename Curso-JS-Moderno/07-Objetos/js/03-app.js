// Agregar y eliminar propiedades a un objeto.
// podemos agregarlo directamente dentro de la declaración o hacerlo de otra forma
const producto = {
  nombre: "monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};

console.log(producto);

// para agregar nuevas propiedades al objeto hacemos uso de punto.
// si escribimos una propiedad ya existente la reescribiremos

producto.imagen = "imagen.jpg";
console.log(producto);

// Eliminar valores de nuestro objeto
// hacemos uso de delete seguido del objeto.valoraeliminar

delete producto.disponible;
console.log(producto);
