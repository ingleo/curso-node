// function sumar(a, b) {
//     return a + b;
// }

// let sumar = (a, b) => {
//     return a + b;
// }

let sumar = (a, b) => a + b;

console.log(sumar(10, 20));

// function saludar() {
//     return 'Hola';
// }

let saludar = () => "Hola";

console.log(saludar());

//al usar función flecha con el método los valores son undefined, porque el this busca de forma global la variable
let deadpool = {
  nombre: "Wade",
  apellido: "Winston",
  poder: "Regeneración",
  getNombre() {
    return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
  },
  getNombre2: () => {
    return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
  },
  getNombre3: function() {
    return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
  }
};

console.log(deadpool.getNombre());
console.log(deadpool.getNombre2());
console.log(deadpool.getNombre3());
