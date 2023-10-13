/*9. Se le solicita al usuario que ingrese su nombre y luego su apellido. Realice un
programa que arme y muestre el mensaje "Bienvenido", seguido del nombre y apellido
del usuario.*/


// Solicitar al usuario su nombre y apellido
var nombre = prompt("Por favor, ingresa tu nombre:");
var apellido = prompt("Por favor, ingresa tu apellido:");

// Concatenar el nombre y el apellido
var nombreCompleto = nombre + " " + apellido;

// Mostrar el nombre completo en un mensaje de alerta
alert("Bienvenido: " + nombreCompleto + "!!!");
