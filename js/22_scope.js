// Scope

/*
  Tomar en cuenta que la declaración de una variable
  solo vive entre las llaves (ámbito) que lo contienen.
  Bajo este concepto no puedes llamar una variable definida
  fuera de tu ámbito.
*/ 

const precio = 300

function oneFunction() {
  const precio = 10
  const numero = 20
  console.log(precio) // 10
  if(true) {
    console.log(precio) // 10
    console.log(numero) // 20
    const numero2 = 600
    console.log(numero2) // 600
  }
  // Para el ámbito que me encuentro la variable 'numero2' no existe
  // console.log(numero2)
}

if(true) {
  console.log(precio) // 300
}
oneFunction()
// Para el ámbito que me encuentro la varibale 'numero' no existe
// console.log(numero)

