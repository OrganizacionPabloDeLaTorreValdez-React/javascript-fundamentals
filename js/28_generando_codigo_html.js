// Generando código HTML desde Javascript
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const elementForm = e.target;
  const formData = new FormData(e.target);
  // console.log(formData.get('nombre'));
  // console.log(formData.get('password'));

  let alerta = document.querySelector('.alerta');
  if(!alerta) {
    alerta = document.createElement('DIV');
    alerta.id = 'Hola';
    // alerta.classList.add('Hola', 'segundoclase');
    alerta.classList.add('alerta');
  }
  const nombreValue = formData.get('nombre');
  const passwordValue = formData.get('password');

  if(nombreValue == '' ||  passwordValue == '') {
    alerta.textContent = 'Todos los campos son obligatorios';
    alerta.classList.remove('exito')
    alerta.classList.add('error');
  } else {
    alerta.textContent = 'Todo bien!';
    alerta.classList.remove('error');
    alerta.classList.add('exito');
  }
  console.log(alerta);

  elementForm.after(alerta);
});


