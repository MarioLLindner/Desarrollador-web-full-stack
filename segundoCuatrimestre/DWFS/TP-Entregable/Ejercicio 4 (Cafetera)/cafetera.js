"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cafetera = void 0;
var Cafetera = /** @class */ (function () {
    function Cafetera(capacidadMaxima, cantidadActual) {
        if (!capacidadMaxima && !cantidadActual) {
            this.capacidadMaxima = 1000;
            this.cantidadActual = 0;
            console.log("cafetera estandar");
        }
        else if (capacidadMaxima && !cantidadActual) {
            this.capacidadMaxima = capacidadMaxima;
            this.cantidadActual = capacidadMaxima;
            console.log("capacidad maxima");
        }
        else if (cantidadActual && capacidadMaxima) {
            if (cantidadActual > capacidadMaxima) {
                var sobrante = cantidadActual - capacidadMaxima;
                this.cantidadActual = capacidadMaxima;
                this.capacidadMaxima = capacidadMaxima;
                console.log("se lleno la cafetera y el resto se ha puesto en un termo,".concat(sobrante));
            }
        }
    }
    Cafetera.prototype.llenarCafetera = function () {
        this.cantidadActual = this.capacidadMaxima;
        console.log("su cafetera ya esta lista");
    };
    Cafetera.prototype.servirTaza = function (tamañoTaza) {
        if (this.cantidadActual > tamañoTaza) {
            this.cantidadActual -= tamañoTaza;
            console.log("se ha llenado su taza con: ", tamañoTaza);
        }
        else if (this.cantidadActual == 0) {
            console.log("Por favor, llene su cafetera");
        }
        else if (this.cantidadActual < tamañoTaza && this.cantidadActual > 0) {
            console.log("su taza se lleno con ".concat(this.cantidadActual, " cc, su cafetera ha quedado vacia"));
            this.cantidadActual = 0;
        }
    };
    Cafetera.prototype.vaciarCafetera = function () {
        this.cantidadActual = 0;
        console.log("Se ha vaciado su cafetera");
    };
    Cafetera.prototype.agregarCafe = function (cafeAgregado) {
        var espacioDisponible = this.capacidadMaxima - this.cantidadActual;
        if (espacioDisponible) {
            if (espacioDisponible > cafeAgregado) {
                this.cantidadActual += cafeAgregado;
                espacioDisponible = this.capacidadMaxima - this.cantidadActual;
                console.log("se agrego ".concat(this.cantidadActual, " cc mas de cafe,queda disponible ").concat(espacioDisponible, " cc para llenar"));
            }
            else {
                console.log("la cantidad que quiere agregar supera la cantidad disponible");
            }
        }
    };
    Cafetera.prototype.mostrarCafetera = function () {
        console.log("capacidad max: ", this.capacidadMaxima);
        console.log("cantidad actual: ", this.cantidadActual);
        console.log("...........................");
    };
    return Cafetera;
}());
exports.Cafetera = Cafetera;
