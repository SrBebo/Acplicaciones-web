'use strict'
/* 
let se usa para variables locales
var se usa para variables globales
*/ 
var numero=6;
if(true){
    var numero=4;
    console.log(numero);
}
console.log(numero);

var num=8;
if(true){
    var num=2;
    console.log(num);
}
console.log(num);