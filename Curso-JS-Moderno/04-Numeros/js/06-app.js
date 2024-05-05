// Funciones y métodos con números
const numero1 = "20";
const numero2 = "20.2";
const numero3 = "1";
const numero4 = 20;

console.log(numero1);
console.log(Number.parseInt(numero1)); // parseInt() convierte un string a número entero
console.log(Number.parseFloat(numero2)); // parseFloat() convierte un string a número en flotante

// Revisar si un número es entero o no
console.log(Number.isInteger(numero3)); // Devuelve true o false si el valor es o no un entero
