const {guardarProducto, listaProductos, actualizarProducto, eliminarProducto} = require("../DB/productos")
const {listaMensajes, guardarMensaje} = require("../DB/mensajes")

//                                      RUTA: /PRODUCTOS/
exports.mostrarProductos = (req, res) =>{
    const productos = listaProductos()
    res.send(productos)
}
exports.guardarProductos = (req, res) =>{
    guardarProducto(req.body);
    res.send("Producto guardado")
}
exports.actualizarProductos = (req, res) =>{
    actualizarProducto(req.body);
    res.send("Producto actualizado")
}
exports.eliminarProductos = (req, res) =>{
    eliminarProducto(req.params.id)
    res.send("Producto eliminado")
}

//                                      RUTA: /MENSAJES/

exports.mostrarMensajes =  (req, res) =>{
    const mensajes =  listaMensajes()
    res.send(mensajes)
}
exports.guardarMensajes =  (req, res) =>{
    const mensaje = req.body;
     guardarMensaje(mensaje)
    res.send("Mensaje guardado")
}

/* export function getProducts (){
    try {
       return productos
    } catch (error) { 
        return `${error}: Productos no encontrados`
    } 
}
export function getProductId (productoId){
    try {
        if(productoId < productos.length && productoId > 0){
        let selectedProduct = productos[productoId-1];
        return selectedProduct}
        else{
            return "ERROR: Producto no encontrado"
        }
    } catch (error) { 
        return error
    } 
}
export function updateProduct (producto){
    try { 
        let ultimoElemento = productos[productos.length - 1]
        let Id = ultimoElemento.id + 1;
        let newProduct = {...producto, Id};
       return newProduct
    } catch (error) { 
        error
    } 
}
export function updateId (idProducto){
    try {
        if (idProducto > 0 && idProducto < productos.length) {
            let selectedObject = productos[idProducto - 1]
            let object= JSON.stringify(selectedObject)
            return  `El objeto ${object} ha sido actualizado`
        } else {
            return `Error: Producto no encontrado`
        }
       return
    } catch (error) { 
        return error
    } 
}

export function deleteProduct (producto){
    try {
        let id = producto.id;
        productos.splice(id, 1)
        return productos
    } catch (error) { 
        return error
    }
} */