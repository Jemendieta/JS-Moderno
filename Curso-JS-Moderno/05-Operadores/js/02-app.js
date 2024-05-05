// Comparar dos valores (si son o no iguales)
// operador ==
const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

// Revisar si dos números son iguales

console.log(numero1 == numero2); // Nos devolverá true pues son iguales, el operador == solo se fija en el valor, no en el tipo de dato

console.log(numero1 === numero2); // Nos devovlerá false pues ahora si comparamos también tipo de dato
// el operador === es conocido como el operador estricto
console.log(numero1 === parseInt(numero2)); // con esto convertimos a int numero2 y luego comparamos si son iguales, nos devolverá true

console.log(numero1 == numero3); // Nos devolverá false pues 20 y 30 no son iguales

// Con typeof podemos conocer el tipo de dato que contiene nuestra variable
console.log(typeof numero1); // Nos devolverá int
console.log(typeof numero2); // Nos devolverá string

// Comparador si dos variables son diferentes
// usamos el operador !=

const pass1 = "Admin";
const pass2 = "admin";

console.log(pass1 != pass2); // nos devuelve false
console.log(numero1 !== numero2); // nos devuelve false, !== es un operador estricto
