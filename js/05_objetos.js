// Objetos
const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

console.log(producto)
console.table(producto)

// accediendo a las propiedades del objeto
console.log(producto.nombre) // Tablet
console.log(producto.precio) // 300
console.log(producto.disponible) // true

// Destructuring
// permite extraer los valores del objeto
const {nombre, precio, disponible} = producto
console.log(nombre)
console.log(precio)
console.log(disponible)

// Objects Literal Enhancement
// colocando valores de variables dentro de un objeto
const autenticado = true
const usuario = "Juan"

const nuevoObjeto = {
    // se puede colocar de esta forma
    // si el nombre de las propiedades es el mismo
    autenticado,
    usuario: usuario
}

console.table(nuevoObjeto)
