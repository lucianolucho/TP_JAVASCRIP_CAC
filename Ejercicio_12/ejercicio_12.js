/*12. Realizar un sistema para el cálculo de sueldos de una empresa. Se le solicita que
ingrese el valor de la hora y la cantidad de horas trabajadas en el mes. Realice un
programa para calcular e informar el sueldo mensual del empleado.*/


var valorHora = 0.0;
var cantidadHorasTrabajadas = 0;

// Solicitar al usuario su nombre y apellido
valorHora = prompt("Por favor, ingrese el valor de la hora:");
cantidadHorasTrabajadas = prompt("Por favor, ingrese la cantidad de horas trabajadas:");

var sueldo = valorHora  * cantidadHorasTrabajadas;


alert("El valores ingresados son:  \n" +
    "el valor hora es: " + valorHora + "\n" +
    "la cantidad de horas es: " + cantidadHorasTrabajadas + "\n" +
    "el sueldo devaluado es: " + sueldo + "  \n");

console.log("El valores ingresados son: ");
console.log("el valor hora es: " + valorHora );
console.log("la cantidad de horas es: " + cantidadHorasTrabajadas);
console.log("el sueldo devaluado es: " + sueldo);