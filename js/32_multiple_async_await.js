// Fetch API - Async Await (Multiples llamados)

const urlComments = 'https://jsonplaceholder.typicode.com/comments';
const urlPhotos = 'https://jsonplaceholder.typicode.com/photos';

const consultarApiAsync = async () => {
  const inicio = performance.now();
  const respuesta = await fetch(urlComments);
  const resultado = await respuesta.json();
  console.log(resultado);

  console.log('iniciando segunda consulta');

  const respuesta2 = await fetch(urlPhotos);
  const resultado2 = await respuesta2.json();
  console.log(resultado2);
  const fin = performance.now();
  console.log(`Ejecución PRIMER Async: ${fin - inicio} ms`);
};

const consultarApiAsyncMultiple = async () => {
  // se llaman los dos servicios en paralelo
  const inicio = performance.now();
  const [respuesta1, respuesta2] = await Promise.all([fetch(urlComments),fetch(urlPhotos)])
  const resultado = await respuesta1.json();
  const resultado2 = await respuesta2.json();
  console.log(resultado);
  console.log(resultado2);
  const fin = performance.now();
  console.log(`Ejecución SEGUNDO Async: ${fin - inicio} ms`);
};

consultarApiAsync();
consultarApiAsyncMultiple();



