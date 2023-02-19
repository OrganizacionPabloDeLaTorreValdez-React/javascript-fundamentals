// Objetos - Destructuring con 2 o más objetos

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

const cliente = {
    nombre: "Juan",
    premium: true
}

const {nombre, precio, disponible} = producto
// asignando un nuevo nombre a la propiedad a crear
// durante el destructuring: {<nombre_propiedad>: <nuevo_nombre>}
const {nombre: nombreCliente, premium} = cliente

console.log(nombre, precio, disponible)
console.log(nombreCliente, premium)
