let alumno = {
  nombre: 'Evelyn',
  apellido: 'Garcia',
  grupo: '2A',
  edad: 7,
  tutor: 'Marcela',
  //Método GET
  get nombreCompleto(){
    return this.nombre + ' ' + this.apellido;
  }
}
console.log(alumno.nombreCompleto);



