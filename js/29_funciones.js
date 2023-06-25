// const sumar = function(numero1, numero2) {
//   return numero1 + numero2;
// }
const sumar = (numero1, numero2) => numero1 + numero2;

function restar(numero1, numero2) {
  return numero1 - numero2;
}

/*
  export default sumar; -> por defecto se hará uso de la función sumar cuando 
                          importes este archivo.

  Para exportar varias funciones debes hacero así
  export {
    sumar,
    restar,
  }
*/


export {
  sumar,
  restar,
}
