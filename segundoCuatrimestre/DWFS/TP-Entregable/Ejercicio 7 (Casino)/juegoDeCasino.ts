// Casino
// Crear una superclase JuegoDeCasino.
// Crear dos clases que hereden de ella (pueden ser juegos
// puntuales como por ejemplo: Craps, tragamonedas, Ruleta,
// BlackJack, etc...)
// Luego, aplicar composición entre una clase Casino y las
// dos clases hijas de JuegodeCasino.
// Crear los diagramas de clases de la solución que
// propongan.


export class JuegoDeCasino {

    protected nombre: string;
    protected jugadores: number;
    protected apuestaMinima: number;



    public constructor(nombre: string, jugadores: number, apuestaMinima: number) {
        this.nombre = nombre;
        this.jugadores = jugadores;
        this.apuestaMinima = apuestaMinima;
    }

    public iniciarJuego() {
        console.log(`Bienvenido a ${this.nombre}, Puede empezar su apuesta.`);
    }

    public finalizarJuego() {
        console.log(`Muchas gracias por haber jugado a ${this.nombre}. Puede retirar su saldo`);

    }



}