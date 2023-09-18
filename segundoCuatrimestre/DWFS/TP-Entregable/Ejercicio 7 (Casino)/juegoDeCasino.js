"use strict";
// Casino
// Crear una superclase JuegoDeCasino.
// Crear dos clases que hereden de ella (pueden ser juegos
// puntuales como por ejemplo: Craps, tragamonedas, Ruleta,
// BlackJack, etc...)
// Luego, aplicar composición entre una clase Casino y las
// dos clases hijas de JuegodeCasino.
// Crear los diagramas de clases de la solución que
// propongan.
Object.defineProperty(exports, "__esModule", { value: true });
exports.JuegoDeCasino = void 0;
var JuegoDeCasino = /** @class */ (function () {
    function JuegoDeCasino(nombre, jugadores, apuestaMinima) {
        this.nombre = nombre;
        this.jugadores = jugadores;
        this.apuestaMinima = apuestaMinima;
    }
    JuegoDeCasino.prototype.iniciarJuego = function () {
        console.log("Bienvenido a ".concat(this.nombre, ", Puede empezar su apuesta."));
    };
    JuegoDeCasino.prototype.finalizarJuego = function () {
        console.log("Muchas gracias por haber jugado a ".concat(this.nombre, ". Puede retirar su saldo"));
    };
    return JuegoDeCasino;
}());
exports.JuegoDeCasino = JuegoDeCasino;
