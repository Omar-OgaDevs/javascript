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

function determinarTipo (tipo){
  console.log(tipo.obtenerDetalles());
  if(tipo instanceof Gerente){
    console.log('Es un objeto de tipo gerente');
  }
  else if(tipo instanceof Empleado){
    console.log('Es un objeto de tipo empleado');
  }
  else if (tipo instanceof Object){
    console.log('Es un tipo object');
  }
}


let empleado1 = new Empleado('Evelyn',9000);
let gerente1 = new Gerente('Omar',7000,'Sistemas');

determinarTipo (empleado1);
determinarTipo (gerente1);