class Empleado{
  constructor(nombre,sueldo){
    this.nombre = nombre;
    this.sueldo = sueldo;
  }
  obtenerDetalles(){
    return `Empleado: nombre: ${this.nombre}, sueldo: ${this.sueldo}`;
  }
}

class Gerente extends Empleado{
  constructor(nombre,sueldo,departamento){
    super(nombre,sueldo);
    this.departamento = departamento;
  }
  obtenerDetalles(){
    return `Gerente: ${super.obtenerDetalles()} depto: ${this.departamento}`;
  }
}

function imprimir (tipo){
  console.log(tipo.obtenerDetalles());
}


let empleado1 = new Empleado('Evelyn',9000);
let gerente1 = new Gerente('Omar',7000,'Sistemas');

imprimir (empleado1);
imprimir (gerente1);