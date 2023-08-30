//UML
 https://drive.google.com/file/d/1J1epo9pb5STYo5SbfQLONcsb-yP7-LTt/view?usp=sharing

class Alumno {
    private nombre: string;
    private dni: number;
    private legajo: number;
    private notas: number[];

    constructor(nombre: string, dni: number, legajo: number, notas: number[]) {
        this.nombre = nombre
        this.dni = dni
        this.legajo = legajo
        this.notas = notas
    }

    public getNombre(): string {
        return this.nombre;
    }


    public getDni(): number {
        return this.dni;
    }


    public getLegajo(): number {
        return this.legajo;
    }

    public getNotas(): number[] {
        return this.notas;
    }

    public getPromedio(): number {
        let promedio: number = 0;
        for (let index = 0; index < this.notas.length; index++) {
            promedio += this.notas[index];
        }
        promedio = promedio / this.notas.length;
        return promedio;
    }
}

class GestorLegajo {
    private alumnos: Alumno[];
    constructor() {
        this.alumnos = []
    }

    public darDeAlta(alumno: Alumno) {
        this.alumnos.push(alumno);
    }

    public promedioAlumno(legajo: number):number {
        let promedio: number = 0;
        for (let index = 0; index < this.alumnos.length; index++) {
            let alumnoActual = this.alumnos[index];
            if (alumnoActual.getLegajo() === legajo) {
                promedio = alumnoActual.getPromedio()
            }
        }
        return promedio;

    }

    public promedioGeneral(): number {
        let promedio:number=0;
        for (let index = 0; index < this.alumnos.length; index++) {
            let alumnoActual = this.alumnos[index];
            promedio += alumnoActual.getPromedio()
        }
        promedio = promedio/ this.alumnos.length;
        
        return promedio;
    }

}

// Ejemplo de uso
let legajo = new GestorLegajo();

let Mario = new Alumno ('Mario', 39590930, 225544,[8,7,4,6]);
let kevin = new Alumno ('Kevin', 39590932, 225543,[9,2,8,9]);
let Daniel = new Alumno ('Daniel', 39590931, 225542,[7,6,2,7]);

legajo.darDeAlta(Mario);
legajo.darDeAlta(kevin);
legajo.darDeAlta(Daniel);

console.log('Promedio Individual: ',legajo.promedioAlumno(225544));
console.log('Promedio Individual: ',legajo.promedioAlumno(225543));
console.log('Promedio Individual: ',legajo.promedioAlumno(225542));
console.log('Promedio General: ',legajo.promedioGeneral());