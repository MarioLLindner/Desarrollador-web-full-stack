// Definición de la clase abstracta para los elementos a vender
class ElementoAVender {
    nombre;
    costo;
    constructor(nombre, costo) {
        this.nombre = nombre;
        this.costo = costo;
    }
}
// Definición de la clase para los elementos disponibles
class ItemDisponible extends ElementoAVender {
    constructor(nombre, costo) {
        super(nombre, costo);
    }
    vender(cantidad) {
        console.log(`Se vendieron ${cantidad} ${this.nombre}(s)`);
    }
}
// Clase para el sistema de control de stock
class SistemaStock {
    elementosDisponibles = [];
    elementosVendidos = [];
    constructor() {
        this.elementosDisponibles = [];
        this.elementosVendidos = [];
    }
    agregarElementoDisponible(elemento) {
        this.elementosDisponibles.push(elemento);
    }
    venderElemento(nombre, cantidad) {
        let elemento = this.elementosDisponibles.find((item) => item.nombre === nombre);
        if (elemento) {
            elemento.vender(cantidad);
            this.elementosVendidos.push(elemento);
        }
        else {
            console.log(`No se encontró el elemento ${nombre}`);
        }
    }
    mostrarElementosVendidos() {
        console.log("Elementos vendidos:");
        this.elementosVendidos.forEach(item => {
            console.log(`${item.nombre} - Costo: ${item.costo}`);
        });
    }
}
// Ejemplo de uso
const sistema = new SistemaStock();
const gaseosa = new ItemDisponible("Gaseosa", 2.5);
const chocolate = new ItemDisponible("Chocolate", 1.0);
const yerba = new ItemDisponible("Yerba", 2.0);
sistema.agregarElementoDisponible(gaseosa);
sistema.agregarElementoDisponible(chocolate);
sistema.agregarElementoDisponible(yerba);
sistema.venderElemento("Gaseosa", 3);
sistema.venderElemento("Chocolate", 5);
sistema.mostrarElementosVendidos();
console.log(sistema);
