// Uniendo o concatenando strings
const color = "Camiseta Roja ";
const camiseta = "30 USD";

// concatenando strings, existen varias formas
// usando el método .concat
console.log(color.concat(camiseta));
console.log(color.concat(" En descuento"));

// usando el símbolo + o también la coma ,
console.log(color + camiseta);
console.log(color + " Con un precio de: " + camiseta);
console.log("El producto " + color + " Tiene un precio de: " + camiseta);
console.log("El producto ", color, " Tiene un precio de: ", camiseta);

// uso de los template strings o literals, es la forma recomendada
// hacemos uso de la comilla invertida
console.log(`El producto ${color} tiene un precio de ${camiseta}`);

// Los template string nos permiten colocar segmentos de código cómo cadenas de texto
const ul = `
    <ul>
        <li>uno</li>
        <li>dos</li>
        <li>tres</li>
        <li>cuatro</li>
    </ul>
`;
console.log(ul);
