//Tipos primitivos
let x = 10;

function cambiarValor(a){ // a=x
  a = 20;  
}

//Paso por valor
cambiarValor(x); //aqui vale 10
console.log(x);
console.log(a); // is not defined
/*
la variable a solo esta definida
dentro de la funcion, por y se
destruye al terminar la misma
*/