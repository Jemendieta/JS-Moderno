// Orden de ejecución de las operaciones con números
let resultado;

resultado = 20 + 30 * 2; // Devuelve 80 pues primero se lleva a cabo la multiplicación.
resultado = (20 + 30) * 2; // Ahora resuelve primero la suma y luego la multiplicación.

// 20% de descuento en tu compra
resultado = (20 + 30 + 40 + 50 + 60) * 0.2; // con esto calculamos el 20%
resultado = (20 + 30) * 1.16; // con esto calculamos el 16%

console.log(resultado);
