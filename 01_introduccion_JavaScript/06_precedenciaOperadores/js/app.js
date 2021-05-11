let x = 5;
let y = 10;
let z = ++x + y--;
console.log(x);
/* x=6 por el PRE-incremento ++x 1+5 
* la variable y mantiene su valor hasta
* finalizar la operacion se le aplica
* el POS-decremento y-- 10-1 para ser
* el nuevo valor en adelante.
*/ 
console.log(y); 
/* y=9 por el POS-decremento y-- 10-1 */ 
console.log(z);
/*z = 6(++x) + 10(y--)
* z=16 ya que primero esta el pre-incremento de x
* y el pos-decremento se lleva acabo al finalizar
* la operacion
*/ 