// Tipos de datos

// Undefined
let cliente

console.log(cliente) // undefined
console.log(typeof cliente) // undefined

// Boolean
const descuento = true
console.log(descuento) // true
console.log(typeof descuento) // boolean

// Number
const numero1 = 20.20
const numero2 = 30
const numero3 = -100

console.log(typeof numero1) // number
console.log(typeof numero2) // number
console.log(typeof numero3) // number

// Strings o Cadenas de texto
const alumno = "Juan"
let producto = 'Monitor 20 pulgadas'

const num1 = "30"
const num2 = 30

console.log(typeof alumno) // string
console.log(typeof producto) // string
console.log(typeof num1) // string
console.log(typeof num2) // number

// BigInt
const numeroGrande = BigInt(123456789123456789123456789123456789123456)
console.log(typeof numeroGrande) // bigint

//  no pueder realizar operaciones aritméticas de un tipo BigInt con un Number
// al menos que hagas una conversión de tipos
const n1 = 10
const n2 = BigInt(20)

console.log(n1 + Number(n2)) // 30

// si se suma una cadena con un número, se concatena. Puesto que prepondera
// el tipo string sobre el tipo Number
const n3 = 5
const n4 = '5'
console.log(n3 + n4) //55

// Symbol
const primerSymbol = Symbol(30)
const segundoSymbol = Symbol(30)

console.log(typeof primerSymbol) // symbol

// el valor de un Symbol es único
console.log(primerSymbol === segundoSymbol) // false

// para acceder al valor de un symbol
console.log(primerSymbol.valueOf()) // Symbol(30)
console.log(segundoSymbol.valueOf()) // Symbol(30)

// Null
const desc = null
console.log(typeof desc) // object

/*
 NaN vs undefined vs null
 . NaN (Not a number) : indica que el vlaor de un objeto no es un numerico.
 . undefined : Significa que el objeto no tiene ningún valor, por la tanto indefinifo.
   Esto ocurre cuando crea una variable y lo le asigna un valor.
 . null : significa que el objeto esta vacío y no apunta a ninguna dirección de memoria.
*/










