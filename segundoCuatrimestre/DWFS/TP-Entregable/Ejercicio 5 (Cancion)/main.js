"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cancion_1 = require("./cancion");
var cancion1 = new cancion_1.Cancion;
cancion1.ponerAutor("Ataque 77");
cancion1.ponerTitulo("Western");
var cancion2 = new cancion_1.Cancion("Beatle", "Ataque77");
cancion2.mostrarAutor();
cancion2.mostrarTitulo();
console.log("--------------------");
cancion1.mostrarAutor();
cancion1.mostrarTitulo();
