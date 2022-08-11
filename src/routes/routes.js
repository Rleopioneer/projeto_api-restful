const router = require('express').Router()

const ProductsController = require('../controllers/products')
/* 
//Verbos HTTP 
GET - Obter dados
POST - enviar/receber dados
PUT - Atualizar dados
DELETE - Deletar/Remover dados
 */

router.get('/products', ProductsController.get)

// router.post('/products', ProductsController.post)

// router.put('/products/:id', ProductsController.put)

// router.delete('/products/:id', ProductsController.delete)

module.exports = router