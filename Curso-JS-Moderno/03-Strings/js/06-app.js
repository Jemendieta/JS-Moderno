// Métodos Repeat y Split
const $Variable = "Hola de nuevo";
console.log($Variable);

// .repeat() nos permite repetir una cadena ed texto
// el parámetro que le pasemos dentro del paréntesis será la cantiad de veces que se repetirá el texto
const $texto = " Estamos por aqui".repeat(3);
console.log($texto);
console.log(`${$Variable} ${$texto} !!!`);

// Si a .repeat() le pasamos como parámetro un número décimal este lo redondea a entero

// .split() nos permite dividir un string
// el paréntesis recibe el parámetro que se usará para divir cada una de las partes del string, en este caso un espacio
const argumento = "Estoy aprendiendo JavaScript moderno";
console.log(argumento.split(" "));

// Ejemplo son .split()
const actividades = "leer, correr, dormir, jugar, cantar, programar";
// le indicamos que los separe usando la coma que tiene cada uno de ellos
console.log(actividades.split(", "));
