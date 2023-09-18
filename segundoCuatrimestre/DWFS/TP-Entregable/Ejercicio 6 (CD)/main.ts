import { Cancion } from "./cancion";
import { Cd } from "./cd";

let cd1 = new Cd();
let cancion1 = new Cancion("Ataque 77","Western");
let cancion2 = new Cancion('Ataque 77','Chance');
let cancion3 = new Cancion('Ataque 77','Arrancacorazones');
let cancion6 = new Cancion('Ataque 77','Beatle');
let cancion4 = new Cancion('Ataque 77','Hacelo por mi');
let cancion5 = new Cancion('Ataque 77','Porque te vas');


cd1.agregar(cancion1)
cd1.agregar(cancion2)
cd1.agregar(cancion3)
cd1.agregar(cancion4)
cd1.agregar(cancion5)
cd1.agregar(cancion6)
cd1.mostrarCancion(3);
console.log(cd1)

let cancion7 = new Cancion("Ataque 77", "Cartonero")



cd1.grabarCancion(1,cancion7);
console.log(cd1)





