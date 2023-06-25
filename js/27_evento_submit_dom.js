// Eventos del DOM - Submit

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  // console.log(formData.get('nombre'));
  // console.log(formData.get('password'));
  const nombreValue = formData.get('nombre');
  const passwordValue = formData.get('password');

  if(nombreValue == '' ||  passwordValue == '') {
    alert('todos los campos son obligatorios')
  } else {
    console.log('Todo bien, enviando...')
    console.log('Enviaste este formulario');
  }
});


