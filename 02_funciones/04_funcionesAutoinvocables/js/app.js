//funcion autoinvocable sin argumentos, 
//solo se puede llamar asi misma una sola vez
(function(){
  console.log("Ejecutando la función sin argumentos");
})(); //El () sirve para ejecutar la funcion

//funcion autoinvocable con argumentos
(function(a,b){
  console.log("Ejecutando la funcion con argumentos: " + (a+b));
})(7,2);

