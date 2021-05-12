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
//una manera de acceder a la propiedad nombre
console.log(alumno.nombre);
//una manera de acceder a la propiedad apellido
console.log(alumno['apellido']);

//Recorrer todas las propiedades usando for in
for(let nombrePropiedad in alumno){
  console.log(nombrePropiedad);
  console.log(alumno[nombrePropiedad]);
}

