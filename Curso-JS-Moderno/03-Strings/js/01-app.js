//Strings y sus métodos - Formas de declarar strings
// Cadena de texto primitiva - más usado
const producto = 'monitor de 20"';
console.log(producto);

// usando el objeto string
const producto2 = String("Monitor2");
console.log(producto2);

// forma tres
const producto3 = new String("Monitor3");
console.log(producto3);

// Algo a considerar es que no podemos mezclar las comillas simples y dobles al asignar valores a nuestros strings.
// Lo recomendable es hacer uso de la primera forma de declarar strings
// si queremos escapar las comillas haremos uso de lo que vemos a continuación:
// const producto4 = "Monitor de 25\"";
