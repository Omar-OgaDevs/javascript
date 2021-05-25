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

//Llamadas asíncronas con uso de setTimeout

function miFuncionCallback(){
  console.log('hola asíncrono despues de 3 segundos');
}

setTimeout(miFuncionCallback,3000);

setTimeout(function(){console.log('hola asíncrono 2')},5000);

//Con función flecha

setTimeout(() => console.log('hola asíncrono 3'),7000);