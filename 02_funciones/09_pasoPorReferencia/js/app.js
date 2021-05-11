/*
Los tipos primitivos como númericos
o booleanos son aquellos que no 
tienen propiedades ni métodos
asociados a estos valores.

A un objeto se le pueden asociar
propiedades o métodos

la buena práctica indica que para
crear un objeto es definir una
variable de tipo constante
*/

const persona = {
  nombre: 'Omar',
  apellido: 'Aragón'
}
function cambiarValorObjeto(p1){
  p1.nombre = 'Evelyn';
  p1.apellido = 'García';
}
//Paso por referencia
cambiarValorObjeto(persona);
console.log(persona);

