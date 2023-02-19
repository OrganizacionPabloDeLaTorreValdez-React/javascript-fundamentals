// Unir 2 objetos

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

const cliente = {
    nombre: "Juan",
    premium: true
}

// permite copiar los propiedades y pasarlo al objeto
// enviar en el parámetros. Es por ello, el objeto del primer
// parámetro es alterado
//const nuevoObjeto = Object.assign(producto, cliente)
 
// forma más limpia de compiar los atributos de un objeto a otro
// haciendo uso de {...<nombre_objeto>}.
// de esta forma no alteras ningún objeto existente durante la copia
const nuevoObjeto2 = {
    producto: {...producto},
    cliente: {...cliente}
}

console.log(nuevoObjeto2)
console.log(cliente)
console.log(producto)




