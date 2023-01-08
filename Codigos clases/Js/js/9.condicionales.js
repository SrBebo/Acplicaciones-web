'use strict'
/*
operadores relacionales 
>
<
>=
<=
== o ===
!=
*/
var edad=2;
var nombre="Ana";
if(edad>=18){
    console.log("Eres mayor de edad");
}
else{
    console.log("Eres menor de edad");
}
/*
operadores logicos
AND(y): &&
OR (o): ||
Not: ! 
*/ 
var anio=2023;
if(anio!=2019){
    console.log("No estamos en el año 2019");
}
if(anio>=2019&&anio<=2022){
    console.log("Estamos en pandemia");
}