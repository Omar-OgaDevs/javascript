class Persona {
  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }
  get apellido(){
    return this._apellido;
  }
  set apellido(apellido){
    this._apellido = apellido;
  }
  nombreCompleto(){
    return this._nombre + ' ' + this._apellido;
  }
  //Sobreescribiendo el método de la clase padre (object)
  toString(){
    //se aplica polimorfismo (multiples formas en tiempo de ejecucion)
    //el método que se ejecuta depende si es una referencia  de tipo
    //padre o de tipo hijo
    return this.nombreCompleto();
  }
}
class Empleado extends Persona{
  constructor(nombre, apellido,departamento){
    super(nombre,apellido); //llamar al constructor de la clase padre
    this._departamento = departamento;
  }
  get departamento(){
    return this._departamento;
  }
  set departamento(departamento){
    this._departamento = departamento;
  }
  //sobreescritura
  nombreCompleto(){
    return super.nombreCompleto() + ',' + this._departamento;
  }
}

let persona1 = new Persona('Omar','García');
console.log(persona1.toString());

let empleado1 = new Empleado('Evelyn','García','Sistemas');
console.log(empleado1);
console.log(empleado1.nombreCompleto());
console.log(empleado1.toString());
