"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jugador = void 0;
// import { Deportes } from "./deporte";
var miembroClub_1 = require("./miembroClub");
var Jugador = /** @class */ (function (_super) {
    __extends(Jugador, _super);
    //private deporte: Deportes;
    function Jugador(nombre, apellido, fechaNac, documento, telefono, miembroDesde) {
        return _super.call(this, nombre, apellido, fechaNac, documento, telefono, miembroDesde) || this;
        /*this.deporte = deporte;*/
    }
    return Jugador;
}(miembroClub_1.MiembroClub));
exports.Jugador = Jugador;
