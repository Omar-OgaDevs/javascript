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

/*usando prototype vamos a poder
modificar tanto los atributos
como los métodos asociados a un
objeto
*/

Persona.prototype.telefono = '99887766';

let padre = new Persona('Omar','Garcia',39,'ogarcia@mail.com');
padre.telefono = '55443322';
console.log(padre.telefono());

let madre = new Persona('Marcela','Aragon',35,'maragon@mail.com');
madre.telefono = '11001122';
console.log(madre.telefono());
