'use strict'
//eventos cuando el usuario da click, cuando pasa por un elemnto
var boton=document.querySelector("#boton");
var boton2=document.querySelector("#boton2");
console.log(boton);
function cambiarColor(){
    console.log("He sido presionado");
    var bg=boton.style.background;
    if(bg=="blue"){
        boton.style.background="red";
        boton.style.padding="10px";
    }
    else{
        boton.style.background="blue";
        boton.style.padding="5px";
    }
}
//evento click
boton2.addEventListener('click',function(){
    this.style.border="10px solid black";
});