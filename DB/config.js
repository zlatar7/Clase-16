const knexProducto = require('knex')({
    client: 'mysql',
    connection:{
        host: '127.0.0.1',
        port: 3306,
        user:'root',
        password:'',
        database:'ecommerce'
    },
    pool: {min: 0, max: 7}
});

const knexMensaje = require('knex')({
    client: 'sqlite3',
    connection:{
        filename:"./ecommerce.sqlite3"
    },
    useNullAsDefault: true
});

module.exports = { knexMensaje, knexProducto}