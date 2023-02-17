const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']
const numeros = [10, 20, 30]

// includes - Comprobar si un elemento existe en el array
// const resultado = tecnologias.includes('GraphQL')

// some - Devuelve true o false si al menos uno cumple la condición
// const resultado = numeros.some(num => num > 15)

// find - Devuelve el primer elemento que cumpla la condición
// const resultado = numeros.find(num => num > 15)

// every - Devuelve true o false si todos cumplen con la condición
// const resultado = numeros.every(num => num > 15)

// reduce - Acumulando en el total. Además se especifica que el valor
// inicial de total es 0
// const resultado = numeros.reduce((total, num) => num + total, 0)

// filter - Crea un nuevo array en base a una condición
// const resultado = tecnologias.filter(tech => tech !== 'Node.js')
// const resultado = numeros.filter(num => num > 15)

// forEach - Permite iterar el arreglo
// tecnologias.forEach(tech => console.log(tech))
// tecnologias.forEach((tech, index) => console.log(index, tech))

// map - Crear un nuevo arreglo
const resultado = tecnologias.map(tech => tech)

console.log(resultado)


