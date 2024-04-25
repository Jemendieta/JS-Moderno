// Métodos para los Strings
const usuario = "Jorge Mendieta";
const usuario2 = "Tatiana Mendieta";
// cuántas letras tiene mi string
console.log(usuario.length);
// La propiedad .lengh nos muestra la cantidad de caracteres que contiene nuestro string

/* .indexOf: nos permite devolver la existencia de un elemento dentro de nuestro string o array
 Si encuentra el elemento buscado devuelve el índice en donde se encuentra empezando en 0
 y si no encuentra el elemento devuelve -1
 en este ejenplo buscamos saber si en nuestro string se encuentra la plabra Jorge*/
console.log(usuario.indexOf("Jorge"));
// devolverá 0 pues se inicia en la letra J
console.log(usuario.indexOf("Mendieta"));
// devolverá 6, pues inicia en la letra M

// EL método .includes: es similar a indexOf, con la diferencia de que si encuntra el elemento buscado devuelve true, y si no, devuelve false

console.log(usuario2.includes("Mendieta"));

// Estos métodos de los strings diferencian entre minúsculas y mayúsculas
// .lenght no hace uso de paréntesis pues es una propiedad
