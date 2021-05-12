let alumno = {
  nombre: 'Evelyn',
  apellido: 'Garcia',
  grupo: '2A',
  edad: 7,
  tutor: 'Marcela',
  idioma: 'es',
  get lang(){
    return this.idioma.toUpperCase();
  },
  //Método set
  set lang(lang){
    this.idioma = lang.toUpperCase();
  },
  get nombreCompleto(){
    return this.nombre + ' ' + this.apellido;
  }
}
console.log(alumno.lang);

alumno.lang = 'en';

console.log(alumno.idioma);
