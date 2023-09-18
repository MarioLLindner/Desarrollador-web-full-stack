"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Serie = void 0;
var Serie = /** @class */ (function () {
    function Serie(titulo, anioDeEstreno, episodiosPorTemporada, temporadas) {
        this.titulo = titulo;
        this.anioDeEstreno = anioDeEstreno;
        this.episodiosPorTemporada = episodiosPorTemporada;
        this.temporadas = temporadas;
        this.episodiosVistos = 0;
        this.finalizadaCancelada = false;
    }
    Serie.prototype.getTitulo = function () {
        return this.titulo;
    };
    Serie.prototype.getAnioDeEstreno = function () {
        return this.anioDeEstreno;
    };
    Serie.prototype.getEpisodiosPorTemporada = function () {
        return this.episodiosPorTemporada;
    };
    Serie.prototype.getTemporadas = function () {
        return this.temporadas;
    };
    Serie.prototype.getEpisodiosVistos = function () {
        return this.episodiosVistos;
    };
    Serie.prototype.getFinalizadaCancelada = function () {
        return this.finalizadaCancelada;
    };
    Serie.prototype.verEpisodio = function (temporada, episodio) {
        console.log("Estas viendo la serie:", this.getTitulo(), "temporada: ".concat(temporada, ", episodio: ").concat(episodio));
        this.episodiosVistos++;
        console.log("Los episodios que ya vistes son:", this.episodiosVistos);
    };
    Serie.prototype.episodiosPorVer = function () {
        var episodiosPorVer = this.episodiosPorTemporada * this.temporadas - this.episodiosVistos;
        console.log("Los episodios que quedan son: ", episodiosPorVer);
    };
    Serie.prototype.serieVista = function () {
        if (this.episodiosPorTemporada * this.temporadas - this.episodiosVistos == 0) {
            console.log("Terminaste la serie: ".concat(this.titulo));
            this.finalizadaCancelada = true;
        }
        else {
            console.log("Aun estas ahi?, Puedes seguir viendo la serie");
        }
    };
    Serie.prototype.toString = function (serie) {
        console.log(serie);
        console.log("Estas viendo: ", serie.getTitulo(), "Que fue estrenada el anio: ", serie.getAnioDeEstreno(), "con: ", serie.getTemporadas(), "temporadas,", "y con: ", serie.getEpisodiosPorTemporada(), "capitulos");
    };
    return Serie;
}());
exports.Serie = Serie;
