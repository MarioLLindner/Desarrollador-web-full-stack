"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cd = void 0;
var Cd = /** @class */ (function () {
    function Cd() {
        this.canciones = [];
        this.contador = 0;
    }
    Cd.prototype.contarCanciones = function () {
        return this.contador;
    };
    Cd.prototype.mostrarCancion = function (int) {
        this.canciones[int];
        console.log("su cancion es el numero ".concat(int, " es ").concat(this.canciones[int].mostrarTitulo()));
    };
    Cd.prototype.grabarCancion = function (int, cancionNueva) {
        this.canciones[int] = cancionNueva;
        console.log("su cancion numero ".concat(int, " fue cambiada por ").concat(cancionNueva.mostrarTitulo(), " "));
    };
    Cd.prototype.agregar = function (cancionNueva) {
        this.canciones.push(cancionNueva);
        this.contador += 1;
    };
    Cd.prototype.eliminar = function (int) {
        this.canciones.splice(int, 1);
        this.contador -= 1;
    };
    return Cd;
}());
exports.Cd = Cd;
