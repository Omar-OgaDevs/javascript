//objeto
let persona ={ 
  //propiedades
  nombre: 'Evelyn',
  apellido: 'García',
  email: 'ivin@babidibu.com',
  edad: 7,
  nombreCompleto: function(){ //método
    return this.nombre + ' ' + this.apellido;
  }
}
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.apellido);
console.log(persona);
console.log(persona.nombreCompleto());
/* Se agrega () para mandar a llamar 
la función nombreCompleto

this es una variable que apunta al
objeto que se esta trabajando en ese
momento
*/