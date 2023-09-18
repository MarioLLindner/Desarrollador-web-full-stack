import { Cancion } from "./cancion";

let cancion1 = new Cancion;
cancion1.ponerAutor("Ataque 77");
cancion1.ponerTitulo("Western");

let cancion2= new Cancion("Beatle", "Ataque77");

cancion2.mostrarAutor();
cancion2.mostrarTitulo();
console.log("--------------------");
cancion1.mostrarAutor();
cancion1.mostrarTitulo();