interface AutoBase{
    setColor(color);
    getColor();
}
class Auto implements AutoBase{
    public marca:string;
    public color:string;
    public precio:number;
    public anio:number;

    /*constructor(){

    }*/
    constructor(marca,color,precio,anio){
        this.marca=marca;
        this.color=color;
        this.precio=precio;
        this.anio=anio;
    }

    public setColor(color){
        return this.color=color;
    }
    public getColor(){
        return this.color;
    }
}
/*//esto para constructor vacio
var auto=new Auto();
auto.marca="Mazda";
auto.color="rojo";
auto.precio=1500;
auto.anio=2022;
console.log(auto);*/
//para constructor lleno
var auto=new Auto("Ford", "azul", 200, 2012);
console.log(auto);
var camioneta=new Auto("Toyota","azul", 200, 2030);
console.log(camioneta);

class Deportivo extends Auto{
    public techoCorredizo:boolean;
    public setTechoCorredizo(techo){
        return this.techoCorredizo=techo;
    }
    public getTechoCorredizo(){
        return this.techoCorredizo
    }
}
var auto2=new Deportivo("Mercedes", "rojo", 5000, 250);
auto2.setTechoCorredizo(true);
console.log(auto2);