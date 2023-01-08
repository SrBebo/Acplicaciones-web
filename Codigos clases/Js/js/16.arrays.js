'use strict'
var categorias=["Lacteos", "Carne", "Embutidos", "Limpieza"];
var productos=["yogurt","pollo","salchicha","Detergente"];
console.log(categorias, productos);

var tienda=[categorias, productos];
console.log(tienda[0][1]);

//operaciones
productos.push("jabon");
console.log(productos);
//eliminar
var indice=productos.indexOf("salchicha");
console.log(indice);
if(indice>1){
    productos.splice(indice,1);
}
console.log(productos);

//convertir de array a string separado por comas
var productos_string=productos.join();
console.log(productos_string);
productos_string=productos_string.replace(",", " ");
console.log(productos_string);

//string a array
var cadena="texto1,texto2,texto3"
var cadena_array=cadena.split(",");
console.log(cadena_array);

//ordenar array
console.log(productos.sort());
console.log(productos.reverse());
//recorrer un array
for(let producto in productos){
    console.log(productos[producto]);
}
//busqueda en un arreglo
console.log(productos);
var busqueda=productos.findIndex(
    producto=>producto=="jabon");
console.log(busqueda);