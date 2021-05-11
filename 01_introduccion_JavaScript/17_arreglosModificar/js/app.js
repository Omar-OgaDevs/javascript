//let autos = new Array('BMW','VW','TESLA');
//Forma actual para declarar un arreglo

const autos = ['BMW','VW','TESLA'];
console.log(autos);

//Recorrer algunos elementos del arreglo
console.log(autos[0]);
console.log(autos[2]);

//Recorrer todos los elementos del arreglo
for(let i = 0; i < autos.length; i++){
  console.log(i + ' : ' + autos[i]);
}

//Modificar un alemento del arreglo
autos[1]='VolksWagen';
console.log(autos[1]);

//Agregar elementos al arreglo
autos.push('Lamborghini','KIA');
console.log(autos);
