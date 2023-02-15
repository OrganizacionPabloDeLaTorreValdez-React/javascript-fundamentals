// Funciones - Function Expression

// en las funciones por expresión, no puedes llamar a la función antes de definirlar,
// puesto que la variable que recibe la función debe inicializarse antes de que la declares.
// sumar(1, 2) -- incorrecto
const sumar = function(numero1, numero2 = 0) {
  return numero1 + numero2
}

const resultado = sumar(30)
console.log(resultado)

