/*
 Javascript es un leguajede tipado dinámico
 Es por ello, que la verificación de tipo de datos
 se reliza en tiempo de ejecución
*/
let variable = 'texto'
console.log(typeof variable)

/*
 Coerción de datos
 Proceso por el cual JavaScript convierte el valor 
 de una variable de un tipo a otro.
*/

/*
 Coerción Implícita
 Se aplica automáticamente cuando intentas ejecutar
 una operación con dos valores de distintos tipos.
 */
console.log(4 / "2") // 2
console.log(10 + "5") // 105
console.log(10 * "") // 0
console.log(10 + 4 + "dos") // 14dos
console.log(false + true + true) // 2
console.log("true" == true) // false
/*
 Javascript devuelve el valor de la última variable leída
 en la condición.
 En el operador || 
 . Si la condición resulta verdadera, devuelve el valor
 de la variable leída que devolvió verdad.
 . Si la condición resulta falsa, devuelve el valor 
 de la última variable en leer

 En el operado &&
 . Si la condición resulta verdadera, devuelve el valor
 de la última variable en leer
 . Si la condición resulta falsa, devuelve el valor
 de la variable leída que devolvió falso
*/
console.log("hola" || 2) // hola
console.log(false || null) // null
console.log(false && "0") // false
/*
 El operador && se prioriza sobre || a menos que 
 los ordenes con ()
*/
console.log(0 && null || 1 && 1) // 1

/*
 Coerción Explícita
 Javascript provee funciones coercitivas para intentar
 convertir los tipo de dato
*/
// Números
console.log(Number(false)) // 0
console.log(Number("10")) // 10
console.log(Number("")) // 0
console.log(Number(null)) // 0
console.log(Number(undefined)) // NaN

// Texto
console.log(String(25)) // "25"
console.log(String(true)) // "true"
console.log(String("42")) // "42"
console.log(String(-10,5)) // "-10.5"
console.log(String(null)) // "null"
console.log(String(undefined)) // "undefined"

// Boolean
console.log(Boolean(null)) // false
console.log(Boolean(1)) // true
console.log(Boolean("")) // false
console.log(Boolean(NaN)) // false
console.log(Boolean(undefined)) // false