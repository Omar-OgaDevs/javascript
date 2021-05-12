let alumno = {
  nombre: 'Evelyn',
  apellido: 'Garcia',
  grupo: '2A',
  edad: 7,
  tutor: 'Marcela',
  nombreCompleto: function(){
    return this.nombre + ' ' + this.apellido;
  }
}
//Imprimir objeto en formato JSON
let alumnoString = JSON.stringify(alumno);
console.log(alumnoString);
