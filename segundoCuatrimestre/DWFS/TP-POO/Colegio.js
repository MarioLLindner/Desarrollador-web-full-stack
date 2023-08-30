//UML
//https://drive.google.com/file/d/1GqXtEDs37Qa0RNPXXRrOe0uBtYTLC50G/view?usp=sharing, https://drive.google.com/file/d/1J1epo9pb5STYo5SbfQLONcsb-yP7-LTt/view?usp=sharing
class Alumno {
    nombre;
    dni;
    legajo;
    notas;
    constructor(nombre, dni, legajo, notas) {
        this.nombre = nombre;
        this.dni = dni;
        this.legajo = legajo;
        this.notas = notas;
    }
    getNombre() {
        return this.nombre;
    }
    getDni() {
        return this.dni;
    }
    getLegajo() {
        return this.legajo;
    }
    getNotas() {
        return this.notas;
    }
    getPromedio() {
        let promedio = 0;
        for (let index = 0; index < this.notas.length; index++) {
            promedio += this.notas[index];
        }
        promedio = promedio / this.notas.length;
        return promedio;
    }
}
class GestorLegajo {
    alumnos;
    constructor() {
        this.alumnos = [];
    }
    darDeAlta(alumno) {
        this.alumnos.push(alumno);
    }
    promedioAlumno(legajo) {
        let promedio = 0;
        for (let index = 0; index < this.alumnos.length; index++) {
            let alumnoActual = this.alumnos[index];
            if (alumnoActual.getLegajo() === legajo) {
                promedio = alumnoActual.getPromedio();
            }
        }
        return promedio;
    }
    promedioGeneral() {
        let promedio = 0;
        for (let index = 0; index < this.alumnos.length; index++) {
            let alumnoActual = this.alumnos[index];
            promedio += alumnoActual.getPromedio();
        }
        promedio = promedio / this.alumnos.length;
        return promedio;
    }
}
// Ejemplo de uso
let legajo = new GestorLegajo();
let Mario = new Alumno('Mario', 39590930, 225544, [8, 7, 4, 6]);
let kevin = new Alumno('Kevin', 39590932, 225543, [9, 2, 8, 9]);
let Daniel = new Alumno('Daniel', 39590931, 225542, [7, 6, 2, 7]);
legajo.darDeAlta(Mario);
legajo.darDeAlta(kevin);
legajo.darDeAlta(Daniel);
console.log('Promedio Individual: ', legajo.promedioAlumno(225544));
console.log('Promedio Individual: ', legajo.promedioAlumno(225543));
console.log('Promedio Individual: ', legajo.promedioAlumno(225542));
console.log('Promedio General: ', legajo.promedioGeneral());
