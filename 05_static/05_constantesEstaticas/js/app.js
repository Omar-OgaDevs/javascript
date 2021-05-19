/*Los métodos estáticos se asocian con
la clase y no con los objetos*/

class Persona {

  static contadorPersonas = 0; //atributo de nuestra clase

  static get MAX_OBJ(){
    return 5;
  }

  
  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
    if(Persona.contadorPersonas < Persona.MAX_OBJ){
      this.idPersona = ++Persona.contadorPersonas;
    }
    else {
      console.log('Se ha superado el máximo numero de objetos permitidos');
    }    
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
    return this.idPersona + ' ' + this._nombre + ' ' + this._apellido;
  }
  //Sobreescribiendo el método de la clase padre (object)
  toString(){
    //se aplica polimorfismo (multiples formas en tiempo de ejecucion)
    //el método que se ejecuta depende si es una referencia  de tipo
    //padre o de tipo hijo
    return this.nombreCompleto();
  }
  static saludar(){
    console.log('saludos desde método static');
  }
  static saludar2(persona){
    console.log(persona.nombre + ' ' + persona.apellido);
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
console.log(empleado1.toString());

let persona2 = new Persona('Marcela','Aragon');
console.log(persona2.toString());

console.log(Persona.contadorPersonas);

console.log(Persona.MAX_OBJ);

let persona3 = new Persona('kiandra', 'Lopez');
let persona4 = new Persona('Kenneth','Lopez');
let persona5 = new Persona('Clemente','Lopez');
