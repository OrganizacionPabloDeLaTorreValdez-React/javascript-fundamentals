// Iterando en JS
const tecnologias = ['HTML','CSS','JavaScript','React','Node.js']

// forEach - Acceder a cada elemento del array
tecnologias.forEach(function(tech) {
  console.log(tech)
})

// Crear un nuevo arreglo y con la posibilidad de alterar los elementos del mismo
const arrayMap = tecnologias.map(function(tech) {
  return tech
})

console.log(arrayMap)