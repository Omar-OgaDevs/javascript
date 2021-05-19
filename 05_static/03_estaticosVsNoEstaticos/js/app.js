/*Los métodos estáticos se asocian con
la clase y no con los objetos*/

class Persona {

  static contadorObjetosPersona = 0; //atributo de nuestra clase

  email= 'Valor de prueba email'; //atributo de nuestros objetos

  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
    Persona.contadorObjetosPersona++;
    console.log('Se incrementa contador:' + Persona.contadorObjetosPersona);
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
console.log(empleado1);
console.log(empleado1.nombreCompleto());
console.log(empleado1.toString());

//persona1.saludar();
//no es posible llamar un 
//método static desde un objeto, pero si desde
//una clase
Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);
//acceder desde la clase padre
console.log(Persona.contadorObjetosPersona);
//acceder desde la clase hija
console.log(Empleado.contadorObjetosPersona);
//atributo de estático de nuestros objetos
console.log(persona1.email);