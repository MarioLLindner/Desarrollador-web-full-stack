export class Matriz {
  private matriz: number[][];

  constructor(filas: number, columnas: number) {
    const matriz: number[][] = new Array(filas);
    for (let i: number = 0; i < filas; i++) {
      matriz[i] = new Array(columnas);
    }
    for (let i: number = 0; i < filas; i++) {
      for (let j: number = 0; j < columnas; j++) {
        matriz[i][j] = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
      }
    }
    this.matriz = matriz;
  }

  public getValor(x: number, y: number): void {
    console.log(`el valor en la posicion ${x},${y} es: ${this.matriz[x][y]}`)
  }

  public mostrarMatriz():void {
    console.log('--------------------------');
    for (let i: number = 0; i < this.matriz.length; i++) {
        console.log(this.matriz[i].join(" | "));
    }
}

}