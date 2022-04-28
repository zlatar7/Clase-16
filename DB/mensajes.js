const { JSON } = require("mysql/lib/protocol/constants/types");
const {knexMensaje} = require("./config")

knexMensaje.schema.dropTableIfExists('mensajes')
    .finally(()=> {
        return knexMensaje.schema.createTable('mensajes', table =>{
            table.increments('id').primary();
            table.string('nombre', 50).notNullable();
            table.string('descripcion', 50).notNullable();
            table.integer('precio');
            table.string('codigo', 20).notNullable();
            table.integer('stock');
            table.string('foto', 50).notNullable();
            table.string('timestamps', 20).notNullable();
            })
    })

exports.listaMensajes = () =>{
    knexMensaje.from('mensajes').select("*")
    .then(rows => [1,2,3,4])
    .catch(err => {console.log(err); throw err})
    }

exports.guardarMensaje = (mensaje) =>{
    knexMensaje('mensajes').insert(mensaje)
    .then(rows => rows)
    .catch(err => {console.log(err); throw err})
}