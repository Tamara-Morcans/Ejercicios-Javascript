//operaciones artimeticas nivel 1

/*
alert("Hello World");

var variable1= parseInt(prompt("Inserte primera variable:"));
var variable2= parseInt(prompt("Inserte segunda variable:"));

var suma = variable1 + variable2;
var resta = variable1 - variable2;
var multiplicación = variable1 * variable2;
var división = variable1 / variable2;

console.log("La suma de las variables es: " + suma);
console.log("La resta de las variables es:" + resta);
console.log("La multiplicación de las variables es:" + multiplicación);
console.log("La división de los numeros es:" + división);

*/

/*

var edad = parseInt(prompt("¿Cuál es tu edad?"));

if (edad>=18 && edad<29){
    alert("¡FELICIDADES! Fuiste aceptado en Generation");
}
else {
    alert("Lo siento, no cumpliste con los requisitos para entrar en Generation");
}
*/



/*

var suedlo_por_día = parseInt(prompt("Ingrese su salario por día"));
var quincenal = (suedlo_por_día * 14);
var mensual = (suedlo_por_día * 30);

console.log("Su sueldo  bruto quincenal es: " + quincenal);
console.log("Su sueldo bruto mensual es:" + mensual);

quincenal = quincenal - (quincenal * 0.30)- (quincenal * .10); 
mensual = mensual - (mensual * 0.30) - (mensual * .10)

console.log("Su sueldo  neto quincenal es: " + quincenal);
console.log("Su sueldo neto mensual es:" + mensual);


*/

/*
var x = myFuction(5, 5);

function myFuction (a,b) {
    return a + b;
}


var suma = (a + b);
console.log("La suma es:" + myFuction);

*/

 /* EJERCICIO 28 DE MAYO FUNCIONES, ARRAY, OBJETOS: */

/*
function suma (a, b){
   
   var resultado= a + b;
   console.log("La suma de a y b es: " + resultado);
}

suma(5,5);
suma(10,8);
suma (754,842);
suma(78,154);
suma(795,458);

*/

/* Ejercicio no.2 */

var Meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo','Junio', 'Julio', 'Agosto', 'Septiembre','Octubre','Noviembre', 'Diciembre'];
console.log("Los meses del año son: "+ Meses);


/* Ejercicio no.3 */

for (var i = 0; i < Meses.length; i++) {
    console.log(Meses[i]);
}

