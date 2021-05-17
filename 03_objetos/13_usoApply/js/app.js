let persona1={
  nombre: 'Evelyn',
  apellido: 'García',
  nombreCompleto: function(titulo,tel){
    return titulo + ' ' + this.nombre + ' ' + this.apellido + ' ' + tel;
  }
}

let persona2={
  nombre: 'Omar',
  apellido: 'García'
}
/*Uso de Apply para usar el método
persona1.nombreCompleto con los datos
de persona2 */
let arreglo = ['Ing:','5529767457'];
console.log(persona1.nombreCompleto.apply(persona2,arreglo));
