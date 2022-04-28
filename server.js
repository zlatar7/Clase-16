const express = require('express');
const app = express();
const routerProductos = express.Router();
const routerMensajes = express.Router();
/* const server = require('http').Server(app)
const io = require('socket.io')(server) */

const {mostrarProductos, guardarProductos, actualizarProductos, eliminarProductos,mostrarMensajes, guardarMensajes} = require("./controllers/main")

app.use(express.urlencoded({extended: true}))
app.use(express.json())
routerProductos.use(express.json());
routerMensajes.use(express.json());

app.use("/api/productos", routerProductos)
app.use("/api/mensajes", routerMensajes)

routerProductos.get("/mostrar", mostrarProductos)

routerProductos.post("/guardar", guardarProductos)

routerProductos.put("/actualizar", actualizarProductos)

routerProductos.delete("/eliminar", eliminarProductos)

routerMensajes.get("/mostrar", mostrarMensajes)

routerMensajes.post("/guardar", guardarMensajes)

app.get("/", (req, res) =>{
    res.render("index", {productos: productos})
})

/* io.on('connection', function(socket) {
    console.log('Un cliente se ha conectado');
    socket.emit('messages', messages);
    socket.emit('productos', productos)

    socket.on('new-message', function(data) {
        messages.push(data);
        io.sockets.emit('messages', messages);
    });    
    socket.on('msj', function(data) {
        productos.push(data);
        io.sockets.emit('msj', productos)

    });    
}); */

const PORT = 8000

const srv = app.listen(PORT, () => {
    console.log(`Servidor express escuchando en el puerto ${PORT}`)
})

srv.on('error', error => console.log(`Error en servidor ${error}`))