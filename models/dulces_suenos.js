const mongoose = require('mongoose');
const {Schema} = mongoose;

// Este esquema es para decirle a mongodb como van a lucir los datos
const Banner = new Schema({
    titulo: String,
    descripcion: String,
    url_imagen: String,
})

const Producto = new Schema({
    titulo: String,
    descripcion: String,
    url_imagen: String,
})

const Pedido = new Schema({
    nombre_producto: String,
    sabor_base: String,
    sabor_relleno: String,
    usuario_id: String,
    estado: String,
    color_decoracion: String,
    fecha_creacion: Date,
    costo: Number
})


const Usuario = new Schema({
    nombre: String,
    password: String,
    email: {type: String, unique: true},
})


module.exports = {
    Banner: mongoose.model('Banner', Banner),
    Producto: mongoose.model('Producto', Producto),
    Pedido: mongoose.model('Pedido', Pedido),
    Usuario: mongoose.model('Usuario', Usuario),
};
