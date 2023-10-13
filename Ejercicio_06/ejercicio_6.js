/*6. Realice el algoritmo para calcular e informar el resto de la división entera entre los
valores.*/

// se asume datos enteros
var dividendo = 973;
var divisor = 50;


var cociente = Math.floor(dividendo / divisor);
var resto = dividendo % divisor; 

alert("Los valores numéricos son: \n" +
    "El valor del dividendo es : " + dividendo + " \n" +
    "El valor del divisor es : " + divisor + "  \n" +
    "El cociente es: " + cociente + " \n" +
    "El resto es: " + resto + " \n");

console.log("Los valores numéricos son: ");
console.log("El valor del dividendo es : " + dividendo );
console.log("El valor del divisor es : " + divisor );
console.log("El cociente es: " + cociente);
console.log("El resto es: " + resto );