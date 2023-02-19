
const autenticado = true

// Operador ternario
autenticado ? 
  console.log('Usuario autenticado') : 
  console.log('No autenticado, dirigir hacia login')

// Doble operador ternario
const saldo = 600
const pagar = 700
const tarjeta = true

saldo > pagar ? 
  console.log('Puedes pagar con saldo!') : 
  tarjeta ? 
    console.log('Puedes pagar con tarjeta!') :
    console.log('No puedes pagar!')

