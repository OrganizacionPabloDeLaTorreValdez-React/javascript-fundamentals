// Template strings
const producto = 'Tablet de 12 pulgadas';
const precio = 400;
const marca = 'orange';

console.log(producto + ' $' + precio + ', Marca' + marca + ' ' + textoDeFunction());
console.log(producto,' $',precio,', Marca',marca,textoDeFunction());

// Usando template strings
function textoDeFunction() {
  return 'Este texto proviene de la función';
}
console.log(`${producto} $${precio}, Marca: ${marca}, ${textoDeFunction()}`);

