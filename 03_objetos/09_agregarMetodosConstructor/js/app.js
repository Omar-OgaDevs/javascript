//Función de constructor de objeto de tipo Persona
function Persona(nombre, apellido, edad, email){
  this.nombre=nombre;
  this.apellido=apellido;
  this.edad=edad;
  this.email=email;
  this.nombreCompleto = function(){
    return this.nombre + ' ' + this.apellido;
  }
}

let padre = new Persona('Omar','Garcia',39,'ogarcia@mail.com');
console.log(padre.nombreCompleto());

let madre = new Persona('Marcela','Aragon',35,'maragon@mail.com');
console.log(madre.nombreCompleto());
