const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

//rota de visualização
routes.get('/products',ProductController.index);

//rota de criação
routes.post('/products',ProductController.store);

//rota para o show
routes.get('/products/:id',ProductController.show);

//rota para update
routes.put('/products/:id',ProductController.update);

//rota para delete
routes.delete('/products/:id',ProductController.destroy);

module.exports = routes;