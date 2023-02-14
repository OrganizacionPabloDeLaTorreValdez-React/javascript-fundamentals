// Destructuring of arrays
const tecnologias = ['HTML','CSS','JavaScript','React','Node.js']

// A diferencia del destructuring en objeto, en donde al extraer el valor
// se hace match con el nombre de la variable definida en las llaves
// En el arreglo se van extrayendo los valores según la posición y no por el
// nombre de la variable. Por lo que si quieres evitar declarar variables innecesesarias
// puedes solo separar vacío entre comas, y solo definir la variable
// de la posición que necites.
// const [var1, var2, var3, var4, var5] = tecnologias
const [, , , , var5] = tecnologias

console.log(var5)