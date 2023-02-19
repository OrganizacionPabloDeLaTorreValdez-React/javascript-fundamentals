// Evento del DOM - Clicks

// Asociando eventos a los elementos HTML
const heading = document.querySelector('.heading')
heading.addEventListener('click', () => {
  heading.textContent = 'Nuevo heading al dar click'
})

const enlaces = document.querySelectorAll('.navegacion a')
enlaces.forEach(en => {
  en.addEventListener('click', () => {
    console.log('Diste click en un enlace')
  })
})

