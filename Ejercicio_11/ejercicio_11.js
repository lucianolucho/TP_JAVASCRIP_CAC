/*11. Se le solicita al usuario que ingrese 4 números. Realice un programa para calcular e
informar la suma y el promedio.*/


var num = 4.8;


if (typeof num == 'number') {
    // Si la variable 'numero' es un número, se ejecutará este bloque de código
    console.log('La variable numero es un número.');
} else {
    // Si la variable 'numero' no es un número, se ejecutará este bloque de código
    console.log('La variable numero no es un número.');
}


/*
function solicitarNumero(orden) {
    do {
        numero = prompt("Por favor, ingrese el valor " + orden);
        // if (!parseFloat(numero)) {
        //     alert("el numero ingesado es inválido");
        // }
        numero = parseFloat(numero);
    } while ((typeof numero != NaN)) //Number(numero)  && parseFloat(numero) && 
    return numero;
}
*/

let orden;

function solicitarNumero(orden) {
    do {
        var numero = prompt("Por favor, ingrese el valor " + orden);
        numero = parseFloat(numero);
        if (isNaN(numero)) {
            alert("El número ingresado es inválido. Por favor, ingrese un número válido.");
        }
    } while (isNaN(numero));
    return numero;
}


var numeroUno = solicitarNumero(1);
var numeroDos = solicitarNumero(2);
var numeroTres = solicitarNumero(3);
var numeroCuatro = solicitarNumero(4);



var sumatoria = numeroUno + numeroDos + numeroTres + numeroCuatro;
var promedio = sumatoria / 4.0;


alert("El valores ingresados son:  \n" +
    "el valor 1 es: " + numeroUno + "\n" +
    "el valor 2 es: " + numeroDos + "\n" +
    "el valor 3 es: " + numeroTres + "\n" +
    "el valor 4 es: " + numeroCuatro + "\n" +
    "la suma de los valores es : " + sumatoria + " \n" +
    "el promedio es: " + promedio + "  \n");

console.log("El valores ingresados son: ");
console.log("el valor 1 es: " + numeroUno);
console.log("el valor 2 es: " + numeroDos);
console.log("el valor 3 es: " + numeroTres);
console.log("el valor 4 es: " + numeroCuatro);
console.log("la suma de los valores es : " + sumatoria);
console.log("el promedio es: " + promedio);

/******************************** */
// Solicitar al usuario que ingrese 4 números
// var numero1 = parseFloat(prompt("Ingrese el primer número:"));
// var numero2 = parseFloat(prompt("Ingrese el segundo número:"));
// var numero3 = parseFloat(prompt("Ingrese el tercer número:"));
// var numero4 = parseFloat(prompt("Ingrese el cuarto número:"));

// // Calcular la suma de los 4 números
// var suma = numero1 + numero2 + numero3 + numero4;

// // Calcular el promedio de los 4 números
// var promedio = suma / 4;

// // Mostrar la suma y el promedio
// console.log("La suma de los 4 números es: " + suma);
// console.log("El promedio de los 4 números es: " + promedio);
