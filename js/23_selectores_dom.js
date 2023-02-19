
// Selectores del DOM

// const heading = document.querySelector('h2')
// const heading = document.querySelector('.DOM h2')
// const heading = document.querySelector('#heading')
const heading = document.querySelector('.heading')
console.log(heading.textContent) // Probando el DOM
console.log(heading.tagName) // H2
console.log(heading.classList)
console.log(heading.id)

const enlaces = document.querySelectorAll('.navegacion a')
enlaces.forEach(en => {
  console.log(en.textContent)
})





