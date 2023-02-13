// Objetos - Manipulación

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

// no permite crear, modificar o eliminar propiedades
// del objeto
// Object.freeze(producto)

// permite modificar las propiedades existentes, pero no deja
// añadir ni eliminar
// Object.seal(producto)

// reescribir un valor
producto.nombre = "Monitor Curvo"

// si no existe, lo va a añadir
producto.imagen = "imagen.jpg"

// eliminar propiedades del objeto
delete producto.disponible

console.table(producto)





