let persona1={
  nombre: 'Evelyn',
  apellido: 'García',
  nombreCompleto: function(){
    return this.nombre + ' ' + this.apellido;
  }
}

let persona2={
  nombre: 'Omar',
  apellido: 'García'
}
/*Uso de Call para usar el método
persona1.nombreCompleto con los datos
de persona2 */
console.log(persona1.nombreCompleto.call(persona2));
