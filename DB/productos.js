const res = require("express/lib/response");
const { JSON } = require("mysql/lib/protocol/constants/types");
const {knexProducto} = require("./config")

exports.listaProductos = () =>{
    knexProducto.from('articulos').select('*')
    .then(rows => rows)
    .catch(error => {console.log(error); throw error})
}

exports.guardarProducto = (producto) =>{    
    knexProducto('articulos').insert(producto)
    .then(articulo => articulo)
    .catch(error => {console.log(error); throw error})
}

exports.actualizarProducto = (producto) =>{ 
    let id = producto.id   
    knexProducto('articulos').where({'id': id}).update({producto})
}

