import { Cancion } from "./cancion";

export class Cd {
    private canciones: Cancion[];
    private contador: number;

    public constructor(){
        this.canciones = [];
        this.contador = 0;
    }


    public contarCanciones():number{
        return this.contador;

    }

    public mostrarCancion(int: number){
        this.canciones[int] 
        console.log (`su cancion es el numero ${int} es ${this.canciones[int].mostrarTitulo()}` )
        


    }

    public grabarCancion(int:number, cancionNueva: Cancion ){
        this.canciones[int] = cancionNueva;
        console.log (`su cancion numero ${int} fue cambiada por ${cancionNueva.mostrarTitulo()} `)
        

    }

    public agregar(cancionNueva: Cancion){
        this.canciones.push(cancionNueva);
        this.contador +=1;

    }

    public eliminar(int: number){
        this.canciones.splice(int,1);
        this.contador -=1;

    }




}