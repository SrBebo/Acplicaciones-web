'use strict'
//es el arbol de todos los elementos que existe en una api web
/*encontrar un elemento por un ID concreto
var caja=document.getElementById("caja");
console.log(caja);*/
var caja=document.querySelector("#caja");
caja.style.background="red";
caja.style.padding="15px";
caja.style.color="white";
caja.innerHTML="Hola";
caja.className="clase";
console.log(caja);

//encontrar elementos por su etiqueta 
var todosLosDivs=document.getElementsByTagName('div');
console.log(todosLosDivs);
var contenidoDiv3=todosLosDivs[3].textContent;
console.log(contenidoDiv3);
var contenidoNuevo=todosLosDivs[3];
contenidoNuevo.innerHTML="Nuevo texto";
contenidoNuevo.style.background="blue";
contenidoNuevo.style.color="white";

var seccion=document.querySelector("#miSeccion");
var valor;
for(valor in todosLosDivs){
    if(typeof todosLosDivs[valor].textContent=='string'){
        var parrafo=document.createElement("p");
        var texto=document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.append(texto);
        seccion.append(parrafo);
    }
}
var hr=document.createElement("hr");
seccion.append(hr);

//encontrar elementos por su clase
var divRojos=document.getElementsByClassName("rojo");
var divAmarillo=document.getElementsByClassName("amarillo");
console.log(divRojos);
divAmarillo[0].style.background="yellow"

var div;
for(div in divRojos){
    if(divRojos[div].className=="rojo"){
        divRojos[div].style.background="red";
    }
}
var id=document.querySelector("#encabezado");
console.log(id);

var claseRojo=document.querySelector(".rojo");
console.log(claseRojo);

var etiqueta=document.querySelector("div");
console.log(etiqueta);