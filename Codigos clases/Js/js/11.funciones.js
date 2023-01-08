'use strict'
function mensaje(){
    console.log("Hola");
    alert("Bienvenido");
    return "ok";
}
var resultado=mensaje();
console.log(resultado);

function suma(numero1, numero2){
    console.log("Suma"+(numero1+numero2));
}

suma(4, 3);
function calculadora(num1, num2){
    console.log("Suma "+(num1+num2));
    console.log("Resta "+(num1-num2));
    console.log("Multiplicacion "+(num1*num2));
    console.log("Division "+(num1/num2));
}
calculadora(8,5);

function calculadora2(num1, num2, mostrar=false){
    if(mostrar==false){
        console.log("Suma "+(num1+num2));
        console.log("Resta "+(num1-num2));
        console.log("Multiplicacion "+(num1*num2));
        console.log("Division "+(num1/num2));
    }else{
        console.log("Suma 2 "+(num1+num2));
        console.log("Resta 2 "+(num1-num2));
        console.log("Multiplicacion 2 "+(num1*num2));
        console.log("Division 2 "+(num1/num2));
    }
}
calculadora2(8,5, true);
calculadora2(8,5, false);