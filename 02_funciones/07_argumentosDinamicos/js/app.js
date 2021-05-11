let resultado = sumarTodo(7,3,5,4,9,6);
console.log(resultado);

function sumarTodo(){
  let suma = 0;
  for(let i = 0; i < arguments.length; i++){
    suma += arguments[i]; //suma = suma + arguments[i]
  }
  return suma;
}
