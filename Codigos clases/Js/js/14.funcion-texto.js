'use strict'
var numero=4;
var cadena1="Hola";
var cadena2="Bienvenido a mi clase";
//convertir un numero en cadena
console.log(String(numero));

console.log(cadena1.toLocaleUpperCase());
console.log(cadena1.toLocaleLowerCase());

//calcular la longitud 
var nombre="Guillermo";
console.log(nombre.length);

//concatenacion 
var cadena3=cadena1.concat(cadena2);
console.log(cadena3);
//buscar la primera coincidencia dentro de una cadena
var busqueda=cadena2.indexOf("clase");
console.log(busqueda);
