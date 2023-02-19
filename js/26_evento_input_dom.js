// Eventos del DOM - Inputs

const inputNombre = document.querySelector('#nombre')
// al presionar una tecla
// inputNombre.addEventListener('keydown', () => {
//  console.log('Presionando una tecla')
//})
// al soltar una tecla previamente presionada
//inputNombre.addEventListener('keyup', () => {
//  console.log('Soltando la tecla')
//})
// al escribir
// inputNombre.addEventListener('input', () => {
//  console.log('Escribiendo en el input')
//})
inputNombre.addEventListener('input', evt => {
  console.log(evt.target.value)
})

const inputPassword = document.querySelector('#password')
inputPassword.addEventListener('input', funcPassword)

function funcPassword() {
  inputPassword.type = 'text'

  // retrasamos por 1 sg el proceso
  setTimeout(() => {
   inputPassword.type = 'password' 
  }, 1000);
}