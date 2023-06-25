// Fetch API - Async await

const url = 'https://jsonplaceholder.typicode.com/comments';

const consultarApiAsync = async () => {
  const respuesta = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(fetch(url));
    }, 5000);
  });
  console.log(respuesta);
  const resultado = await respuesta.json();
  console.log(resultado);
  resultado.forEach((comment) => console.log(comment))
};

consultarApiAsync();



