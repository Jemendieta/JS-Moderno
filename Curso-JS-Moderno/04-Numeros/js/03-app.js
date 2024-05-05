// Objeto Math, el cual existe en la ventana global de JS y tiene varias operaciones que podemos usar.
let resultado;

// valor de PI
resultado = Math.PI;

// Redondear
resultado = Math.round(2.6);
resultado = Math.round(2.5);

// Redondear hacia arriba
resultado = Math.ceil(2.4); // Devuelve 3

// Redondear hacia abajo
resultado = Math.floor(2.5); // Devuelve 2

// Raíz cuadrada de un número
resultado = Math.sqrt(64); // Devuelve 8

// Valor absoluto
resultado = Math.abs(-13); // devuelve 13

// Potencia de un número
resultado = Math.pow(2, 3); // Devuelve 8

// El número mínimo dentro de una serie
resultado = Math.min(3, 5, 1); //devuelve 1

// El número mayor de una serie
resultado = Math.max(3, 4, 5, 6, 7); // Devuelve 7

// Número aleatorio
resultado = Math.random(); // raras veces da números enteros

// Aleatorio dentro ed un rango
resultado = Math.floor(Math.random() * 30); // Devolverá números aleatorios entre 0 a 30

console.log(resultado);
