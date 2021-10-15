const express = require('express');
const router = express.Router();

const {Banner, Producto, Pedido} = require('../models/dulces_suenos');

// Listar banners
router.get('/banners', async (req, res) => {
    const banners = await Banner.find();
    res.json(banners);
});
// Crear banners
router.post('/banners', async (req, res) => {
    const banner = new Banner(req.body)
    banner.save();
    res.json({status: 'ok', body: banner});
});

// Eliminar banners
router.delete('/banners/:id', async (req, res) => {
    const banner = await Banner.remove({_id: req.params.id});
    console.log("banner > ", banner)
    res.json({status: 'ok', body: banner});
});


// Listar productos
router.get('/productos', async (req, res) => {
    const productos = await Producto.find();
    res.json(productos);
});

// Crear productos
router.post('/productos', async (req, res) => {
    const producto = new Producto(req.body)
    producto.save();
    res.json({status: 'ok', body: producto});
});

// Actualizar Producto
router.put('/productos/:id', async (req, res) => {
    const producto = await Producto.findByIdAndUpdate(req.params.id, req.body);
    res.json({status: 'ok', body: producto});
});

// Eliminar productos
router.delete('/productos/:id', async (req, res) => {
    const producto = await Producto.remove({_id: req.params.id});
    console.log("producto > ", producto)
    res.json({status: 'ok', body: producto});
});


// Listar pedidos
router.get('/pedidos', async (req, res) => {
    const pedidos = await Pedido.find();
    res.json(pedidos);
});
// Crear pedidos
router.post('/pedidos', async (req, res) => {
    const pedido = new Pedido(req.body);
    pedido.save();
    res.json({status: 'ok', body: pedido});
});


module.exports = router;