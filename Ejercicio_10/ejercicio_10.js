/*10. Se le solicita al usuario que ingrese el diámetro de un círculo. Realice un programa
para calcular e informar el perímetro y el área del círculo. Se considerará para este
ejercicio que el valor de PI será 3.1416.*/


const PI = 3.1416;

var diametro = prompt("Por favor, ingrese el diámetro: ");

if(Number(diametro)){

var perimetro =   PI * diametro ;
var area = PI * (diametro / 2.0) * (diametro / 2.0);  

alert("El valor del diametro del círculo es: " + diametro + " \n" +
    
    "El perímetro es: " + perimetro + " unidades \n" +
    "El área es: " + area + " unidades al cuadrado \n" );

console.log("El valor del diametro del círculo es: " + diametro );
console.log("El perímetro es: " + perimetro + " unidades " );
console.log("El área es: " + area + " unidades al cuadrado ");
}else{
    alert("El valor ingresado no es un número");
}
