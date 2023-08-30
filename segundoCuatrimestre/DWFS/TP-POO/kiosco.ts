// Definición de la interfaz para un elemento
interface Elemento {
    nombre: string;
    costo: number;
}

// Definición de la clase abstracta para los elementos a vender
abstract class ElementoAVender implements Elemento {
    public constructor(public nombre: string, public costo: number) { }

    public abstract vender(cantidad: number): void;
}

// Definición de la clase para los elementos disponibles
class ItemDisponible extends ElementoAVender {
    constructor(nombre: string, costo: number) {
        super(nombre, costo);
    }

    vender(cantidad: number): void {
        console.log(`Se vendieron ${cantidad} ${this.nombre}(s)`);
    }
}

// Clase para el sistema de control de stock
class SistemaStock {
    private elementosDisponibles: ElementoAVender[] = [];
    private elementosVendidos: ElementoAVender[] = [];

    constructor() {
        this.elementosDisponibles = [];
        this.elementosVendidos = [];
    }

    agregarElementoDisponible(elemento: ElementoAVender): void {
        this.elementosDisponibles.push(elemento);
    }

    venderElemento(nombre: string, cantidad: number): void {
        let elemento = this.elementosDisponibles.find((item) => item.nombre === nombre);

        if (elemento) {
            elemento.vender(cantidad);
            this.elementosVendidos.push(elemento);
        } else {
            console.log(`No se encontró el elemento ${nombre}`);
        }
    }

    mostrarElementosVendidos(): void {
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
const azucar = new ItemDisponible("Azucar", 1.5);
const aguacaliente = new ItemDisponible("Agua Caliente", 1.0);

sistema.agregarElementoDisponible(gaseosa);
sistema.agregarElementoDisponible(chocolate);
sistema.agregarElementoDisponible(yerba);
sistema.agregarElementoDisponible(azucar);
sistema.agregarElementoDisponible(aguacaliente);


sistema.venderElemento("Gaseosa", 3);
sistema.venderElemento("Chocolate", 5);

sistema.mostrarElementosVendidos();
console.log(sistema);

