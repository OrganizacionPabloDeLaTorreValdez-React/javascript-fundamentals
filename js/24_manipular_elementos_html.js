// Manipular elementos HTML con JS
const heading = document.querySelector('.heading')
heading.textContent = 'Un nuevo heading'
console.log(heading.textContent)

const inputNombre = document.querySelector('#nombre')
inputNombre.value = 'Un valor por default'
console.log(inputNombre)

const enlaces = document.querySelectorAll('.navegacion a')
enlaces.forEach(en => {
  en.textContent = 'Nuevo Enlace'
})

console.log(document.querySelectorAll('#nombre'))


