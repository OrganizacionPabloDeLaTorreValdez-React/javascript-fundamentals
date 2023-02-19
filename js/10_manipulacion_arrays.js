// Operaciones en los arreglos

const tecnologias = ['HTML','CSS','JavaScript','React','Node.js']

// Añadir elementos del array
// tecnologias.push('GraphQL') // Agrega elementos al final del array
// tecnologias.unshift('GraphQL') // Agrega elementos al inicio del array

// Mejor forma de agregar elementos a un arreglo, puesto que no alteras
// el arreglo existente. Además, copias de forma segura los elementos
// de un arreglo en uno nuevo.
const nuevoArreglo = [...tecnologias, 'GraphQL']

// Eliminar elementos del array
// let elementoEliminado
// elementoEliminado = tecnologias.pop() // Elimina el elemento del final del arreglo
// console.log(elementoEliminado)

// elementoEliminado = tecnologias.shift() // Elimina el primer elemento del arreglo
// console.log(elementoEliminado)
// tecnologias.splice(2, 2) // Elimina desde una posicion una cantidad de elementos

// me permite filtrar y de paso iterar los elememtos del arreglo
// const nuevoArray = tecnologias.filter(function(tech) {
//     return tech === 'React'
// })


// Reemplazar elementos o modificarlos
// tecnologias[0] = 'GraphQL'

// Mejor forma para manipular y reemplazar los valores de los elementos de un arreglo
const nuevoArray = tecnologias.map(function(tech) {
    if(tech === 'HTML') {
        return 'GraphQL'
    } else {
        return tech
    }
})



console.table(tecnologias)
console.table(nuevoArray)
