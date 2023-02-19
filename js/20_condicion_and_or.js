
const saldo = 600
const pagar = 500
const tarjeta = false

/*
 || - No mas encuentre alguna condición que se cumpla
 termina y devuelve true. Caso contrario devuelve false.
 && - Si todas las condiciones se cumple devuelve true
 . Caso contrario devuelve false.
*/
if(saldo >  pagar || tarjeta) {
  console.log('|| : Puedes pagar!')
} else {
  console.log('|| : No puedes pagar!')
}

if(saldo > pagar && tarjeta) {
  console.log('&& : Puedes pagar!')
} else {
  console.log('&& : No puedes pagar!')
}


