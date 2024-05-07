// Buenas prácticas al momento de usar Booleans
// Evitar codigo repetitivo o implícito

const autenticado = true;

if (autenticado) {
  // se da por implícito que la condición es true, pues ha sido previamente declarada
  console.log("Puedes ingresar"); // Si la condición se cumple se ejecuta esta línea
} else {
  console.log("No puedes ingresar"); // si la condición no se cumple se ejecuta esta línea
}

// Con operador ternario
console.log(
  autenticado ? "Si está validado el usuario" : "No está validado el usuario"
);
