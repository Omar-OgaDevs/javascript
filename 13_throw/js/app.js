'use strict';
/*
try{
  x=10;  
  throw 'Mi error';
}
catch(error){
  console.log(error);
}
console.log('Continuamos...');
*/

let resultado = 'hola';

try{
  if(isNaN(resultado)) throw 'No es un número';
  else if(resultado === '') throw 'Es cadena vacia';
}
catch(error){
  console.log(error);
}