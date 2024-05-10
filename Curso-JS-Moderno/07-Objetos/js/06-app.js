// Destructuring de Objetos anidados

const producto = {
  nombre: "monitor 20 pulgadas",
  precio: 300,
  disponible: true,
  // agregamos un objeto dentro de otro
  informacion: {
    medidas: { peso: "1kg", medida: "1m" },
    //   tercer objeto
    fabricacion: {
      pais: "Perú",
    },
  },
};

// accedemos a los valores de los dos objetos de la siguiente forma

const {
  nombre,
  informacion,
  informacion: { fabricacion },
} = producto;
console.log(nombre);
console.log(informacion);
console.log(fabricacion);
