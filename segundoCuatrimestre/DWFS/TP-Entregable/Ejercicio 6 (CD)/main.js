"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cancion_1 = require("./cancion");
var cd_1 = require("./cd");
var cd1 = new cd_1.Cd();
var cancion1 = new cancion_1.Cancion("Ataque 77", "Western");
var cancion2 = new cancion_1.Cancion('Ataque 77', 'Chance');
var cancion3 = new cancion_1.Cancion('Ataque 77', 'Arrancacorazones');
var cancion6 = new cancion_1.Cancion('Ataque 77', 'Beatle');
var cancion4 = new cancion_1.Cancion('Ataque 77', 'Hacelo por mi');
var cancion5 = new cancion_1.Cancion('Ataque 77', 'Porque te vas');
cd1.agregar(cancion1);
cd1.agregar(cancion2);
cd1.agregar(cancion3);
cd1.agregar(cancion4);
cd1.agregar(cancion5);
cd1.agregar(cancion6);
cd1.mostrarCancion(3);
console.log(cd1);
var cancion7 = new cancion_1.Cancion("Ataque 77", "Cartonero");
cd1.grabarCancion(1, cancion7);
console.log(cd1);
