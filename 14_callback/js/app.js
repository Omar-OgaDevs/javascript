//Función de tipo común
function miFuncion1(){
  console.log('hola funcion1');
}
function miFuncion2(){
  console.log('hola funcion2');
}

miFuncion2();
miFuncion1();

//Función de tipo callback

function imprimir(mensaje){
  console.log(mensaje);
}

function sumar(op1,op2, funcionCallback){
  let resultado = op1+op2;
  funcionCallback(`Resultado: ${resultado}`);
}
sumar(7,2,imprimir);
