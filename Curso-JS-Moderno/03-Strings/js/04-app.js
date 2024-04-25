// Elminar espacios en blanco al incio y al final de un string con el método .trimp()
const variable = "     La isla bonita    ";
console.log(variable);
console.log(variable.length);

// Eliminar espacios al inicio
// .trimpStart()
console.log(variable.trimStart());

// Eliminar espacios al fina
// .trimpEnd()
console.log(variable.trimEnd());

// Si queremos eliminar ambos espacios al inicio y al final, encademanos los métodos
console.log(variable.trimStart().trimEnd());

// si queremos reducir un poco el uso del método usamos lo siguiente
console.log(variable.trim());

/*
.trimStart() y .trimEnd() són métodos m´+as recientes que permiten eliminar en una u otra dirección,
mientras que .trim() es un poco más antiguo y nos permite elminar tando al inicio como al final,
su uso dependerá de lo que necesitemos hacer.
*/
