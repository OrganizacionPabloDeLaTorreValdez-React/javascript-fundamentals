// Funciones - Function declaration

// como javascript primero crea las funciones, no hay problema
// si llamas a la función antes de la definición de la función
imprimir()

function imprimir() {
  console.log('Hola Mundo')
}

// puedes definir parámetros con valores por defecto
function sumar(numero, numero2 = 0) {
  console.log(numero + numero2)
}

sumar(100)
sumar(10, 20)

function sumar2(numero = 0, numero2 = 0) {
  // return numero + numero2
  // return [numero + numero2, 'Hola Mundo']
  return {
    resultado: numero + numero2,
    mensaje: 'Hola Mundo'
  }
}

const {resultado, mensaje: holaMundo} = sumar2(20, 30)
console.log(resultado)
console.log(holaMundo)






