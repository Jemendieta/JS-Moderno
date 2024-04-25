// Métodos replace, slice y substring
const $miVariable = "Hola de nuevo";
// console.log($mivariable);

// Reemplazar texto de una cadena usando el método .replace()
// dentro del paréntesis colocamos el parámetro que queremos cambiar y seguido de una coma el nuevo valor
console.log($miVariable.replace("Hola", "Hi"));

// Extraer o cortar una cadena de texto usando el método .slice()
// dentro del paréntesis colocamos el índice donde empieza a cortar y el otro es donde termina
console.log($miVariable.slice(0, 9));
// esto nos devolverá: Hola de n

// si solo le pasamos un parámetro iniciará en ese índice e irá hasta el final
console.log($miVariable.slice(5));

//.slice() no corta haca atrás, siempre corta hacia adelante

/* Alternativa a .slice(), el método .substring(),
 recibe también dos parámetros donde incia a cortar y donde termina
 la diferencia es que si a .substring le pasamos primero un número mayor y otro menor,
 .substring() lo lee al contrario, es decir, lo invierte al orden normal.
*/
console.log($miVariable.substring(4, 1));

// Cortando solo una letra con el método .charArt()
console.log($miVariable.charAt(0));
// cortamos solo la primera letra
