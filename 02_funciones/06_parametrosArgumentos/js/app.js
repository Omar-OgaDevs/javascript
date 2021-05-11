//Declaracion de funcion de tipo expresión
let sumar = function (a = 7, b = 2){
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
  return a + b + arguments[2];
};
let resultado = sumar(4,5,10);
console.log(resultado);

/*
los parámetros es la lista de
variables que definimos en una
función:
...function (a,b)...

y los argumentos son los valores
que pasamos cuando mandamos a
llamar una función:
...sumar (7,2)...
*/
