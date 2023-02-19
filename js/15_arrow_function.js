// Funciones - Arrow Function

/*
const sumar = (numero, numero2 = 0) => {
  numero + numero2
}
*/

// si solo tienes una línea de código puedes eliminar las llaves
// const sumar = (numero1, numero2) => numero1 + numero2 

// puedes eliminar el paréntesis definido en los parámetro, si tan solo tienes
// un parámetro.
const sumar = numero => numero + 20

let resultado = sumar(30)
console.log(resultado)

// si no tienes ningún parámetro definido en la función, entonces debes colocar
// un paréntesis en la función
const sumarArrow = () => 2 + 2
resultado = sumarArrow()
console.log(resultado)

