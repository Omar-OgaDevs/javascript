/*
6-11 - Buenos dias
12-18 - Buenas tardes
19-24 - Buenas noches
0-6 - Durmiendo
*/

let horaDia = 12;
let saludo;

if (horaDia >=6 && horaDia <=11){
  saludo="Buenos dias";
}
else if (horaDia >=12 && horaDia <=18){
  saludo="Buenas tardes";
}
else if (horaDia >=19 && horaDia <=24){
  saludo="Buenas noches";
}
else if (horaDia >=0 && horaDia <6){
  saludo="Estoy durmiendo";
}
else{
  saludo="Valor incorrecto";
}
console.log(saludo);