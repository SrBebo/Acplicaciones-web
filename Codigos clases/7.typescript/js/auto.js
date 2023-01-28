var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Auto = /** @class */ (function () {
    /*constructor(){

    }*/
    function Auto(marca, color, precio, anio) {
        this.marca = marca;
        this.color = color;
        this.precio = precio;
        this.anio = anio;
    }
    Auto.prototype.setColor = function (color) {
        return this.color = color;
    };
    Auto.prototype.getColor = function () {
        return this.color;
    };
    return Auto;
}());
/*//esto para constructor vacio
var auto=new Auto();
auto.marca="Mazda";
auto.color="rojo";
auto.precio=1500;
auto.anio=2022;
console.log(auto);*/
//para constructor lleno
var auto = new Auto("Ford", "azul", 200, 2012);
console.log(auto);
var camioneta = new Auto("Toyota", "azul", 200, 2030);
console.log(camioneta);
var Deportivo = /** @class */ (function (_super) {
    __extends(Deportivo, _super);
    function Deportivo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Deportivo.prototype.setTechoCorredizo = function (techo) {
        return this.techoCorredizo = techo;
    };
    Deportivo.prototype.getTechoCorredizo = function () {
        return this.techoCorredizo;
    };
    return Deportivo;
}(Auto));
var auto2 = new Deportivo("Mercedes", "rojo", 5000, 250);
auto2.setTechoCorredizo(true);
console.log(auto2);
