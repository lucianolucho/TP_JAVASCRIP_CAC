/*13. Realizar un sistema para el cálculo de sueldos de una empresa.
 Se le solicita que
ingrese el valor de la hora, la cantidad de horas trabajadas en el mes 
y los años deantigüedad en la empresa.
 Realice un programa para calcular e informar el sueldo
mensual del empleado, teniendo en cuenta que se le asigna un bono mensual igual al
15% del sueldo por año de antigüedad.*/


var valorHora = 0.0;
var cantidadHorasTrabajadas = 0;
var antiguedad= 0;

// Solicitar al usuario su nombre y apellido
valorHora = prompt("Por favor, ingrese el valor de la hora:");
cantidadHorasTrabajadas = prompt("Por favor, ingrese la cantidad de horas trabajadas:");
antiguedad = prompt("Por favor, ingrese la antiguedad:");

var sueldo = valorHora  * cantidadHorasTrabajadas;
var sueldoAnual = sueldo * 12.0 ;
var bonificacion = (sueldoAnual * 15.0 ) / 100.0 ;

sueldo = sueldo + bonificacion ; 


alert("El valores ingresados son:  \n" +
    "el valor hora es: " + valorHora + "\n" +
    "la cantidad de horas es: " + cantidadHorasTrabajadas + "\n" +
    "la antiguedad es : " + antiguedad + "\n" +
    "la bonificacion es : " + bonificacion + "\n" +
    "el sueldo devaluado con la bonificació es: " + sueldo + "  \n");

console.log("El valores ingresados son: ");
console.log("el valor hora es: " + valorHora );
console.log("la cantidad de horas es: " + cantidadHorasTrabajadas);
console.log("la antiguedad es : " + antiguedad);
console.log("la bonificacion es : " + bonificacion);

console.log("el sueldo devaluado es: " + sueldo);

