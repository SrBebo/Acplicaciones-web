'use strict'
function pelicula(nombre){
    console.log("La pelicula es "+nombre);

}
pelicula("Harry el sucio Potter");

var peli=(nombre)=>{
    console.log("La pelicula es "+nombre);
}
console.log(peli("Esmeralda"));

function cuadrado(numero){
    console.log("Cuadrado"+(numero*numero));
};
var potencia=(numero)=>{
    console.log("Cuadrado"+(numero*numero));
}
console.log(potencia(2));
function suma(numero1,numero2){
    console.log("Suma "+(numero1+numero2));
}
var resultado=(numero1,numero2)=>{
    console.log("Suma "+(numero1+numero2));
}
console.log(resultado(4,7));