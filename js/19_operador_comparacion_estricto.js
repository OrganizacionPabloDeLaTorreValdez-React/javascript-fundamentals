// Comparación y Operador Estricto

let numero1 = 20
let numero2 = '20'

/*
 == (Comparación pero no estricta, debido a que solo tomar en cuenta el valor)
 === (Comparación estricta, debido a que toma en cuenta el valor y el tipo de dato)
*/
console.log(typeof numero1) // Number
console.log(typeof numero2) // String
if(numero1 == numero2) {
  console.log('== : Si son iguales!')
} else {
  console.log('== : No son iguales!')
}

if(numero1 === numero2) {
  console.log('=== : Si son iguales!')
} else {
  console.log('=== : No son iguales!')
}

if(numero1 === Number(numero2)) {
  console.log('==== : Si son iguales!')
} else {
  console.log('=== : No son iguales!')
}

/*
 Cuando el valor es un booleano, no es necesario poner '=== true' en la condicional.
 Basta con llamar a la variable.
*/
const autenticado = true
if(autenticado) {
  console.log('Si está autenticado')
}



