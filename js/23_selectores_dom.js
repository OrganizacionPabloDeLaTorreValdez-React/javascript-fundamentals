
// Selectores del DOM

// Obteniendo un elemento u elementos HTML

// const heading = document.querySelector('h2')
// const heading = document.querySelector('.DOM h2')
// const heading = document.querySelector('#heading')
let heading = document.querySelector('.heading')
console.log(heading.textContent) // Probando el DOM
console.log(heading.tagName) // H2
console.log(heading.classList)
console.log(heading.id) // heading

const enlaces = document.querySelectorAll('.navegacion a')
enlaces.forEach(en => {
  console.log(en.textContent)
})

// obtener un elemento por su id
heading = document.getElementById("heading")
console.log(heading.textContent) // Probando el DOM
// obteniendo información del dataset, data-**
console.log(heading.dataset.info) // info1
// obteniendo información de los atributos
console.log(heading.attributes.info.value) // info2





