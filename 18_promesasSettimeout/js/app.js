let miPromesa = new Promise((resolver, rechazar) => {
  let expresion = true;
  if (expresion) resolver("Resolvio Correctamente");
  else rechazar("Se produjo un error");
});

let promesa = new Promise((resolver) => {
  console.log("inicio promesa");
  setTimeout(() => resolver("hola con promesa y timeout"), 3000);
  console.log("fin promesa");
});
promesa.then((valor) => console.log(valor));
