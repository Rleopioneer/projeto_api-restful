const ProductsModel = require('../models/products')

async function get(req, res) {
    const { id } = req.params

    const obj = id ? { _id:id } : null
    //torna a necessidade de possuir um id como opcional
    const products = await ProductsModel.find(obj)

    res.send(products)
}

async function post(req, res) {
    const {
        name,
        brand,
        price
    } = req.body 

    const product = new ProductsModel({
        name,
        brand,
        price
    })

    product.save()

    res.send({
        message:'Success'
    })

}

async function put(req, res) {

    const { id } = req.params

    //quando é obrigatório retornar o item
    const product = await ProductsModel.findOneAndUpdate({ _id:id }, req.body, {new: true})

    res.send({
        message: 'success',
        product
    })

    /* //procura elemento dentro do bando de dados 
    const product = await ProductsModel.findOne({ _id:id })

    //atualiza elemento encontrado de acordo com os parâmetros recebidos
    await product.updateOne(req.body)

    res.send({
        message: 'Success',
        product, //retorna o item atualizado
    }) */

}

async function remove(req, res){

    const { id } = req.params

    const remove = await ProductsModel.deleteOne( {_id:id })

    const message = !remove.ok ? 'Success' : 'Error'
    
    res.send({
        message,
    })

}

module.exports = {
    get,
    post,
    put,
    remove,
}