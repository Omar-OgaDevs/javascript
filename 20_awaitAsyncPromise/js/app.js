let miPromesa = new Promise((resolver, rechazar) => {
  let expresion = true;
  if (expresion) resolver("Resolvio Correctamente");
  else rechazar("Se produjo un error");
});

let promesa = new Promise((resolver) => {
  setTimeout(() => resolver("hola con promesa y timeout"), 3000);
});

//async indica que una función regresa una promesa

async function miFuncionConPromesa() {
  return "saludos con async y promesa";
}

//async con await

async function funcionConPromesaYAwait() {
  let miPromesa = new Promise (resolver => {
    resolver("Promesa con await");
  });
  console.log(await miPromesa);
}
funcionConPromesaYAwait();