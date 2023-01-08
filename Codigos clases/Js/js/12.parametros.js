'use strict'
/*ayudan en los arreglos y las listas de parametos 
spread permite expandir el uso de argumentos 
rest muestra la coleccion de todos los elementos de un mismo arreglo
*/
function listadoAutos(auto1, auto2, ...restoAutos){
    console.log("Auto 1 "+auto1);
    console.log("Auto 2 "+auto2);
    console.log(restoAutos);
}
listadoAutos("Ford","MEla", "Mercedes", "Jeep");
var autos=["Fiat","BMW"];
listadoAutos(...autos,"Chevrolet");