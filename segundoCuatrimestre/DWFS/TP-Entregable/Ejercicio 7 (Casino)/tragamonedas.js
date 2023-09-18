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
exports.tragamonedas = void 0;
var juegoDeCasino_1 = require("./juegoDeCasino");
var tragamonedas = /** @class */ (function (_super) {
    __extends(tragamonedas, _super);
    function tragamonedas(fichaUsuario) {
        var _this = _super.call(this, "tragamonedas", 1, 2) || this;
        _this.fichaUsuario = 0;
        return _this;
    }
    tragamonedas.prototype.apuestaJugador = function (fichaUsuario) {
        if (fichaUsuario >= this.apuestaMinima) {
            console.log("Que disfrute su juego");
        }
        else {
            console.log("Compra tus fichas");
        }
    };
    return tragamonedas;
}(juegoDeCasino_1.JuegoDeCasino));
exports.tragamonedas = tragamonedas;
