const mongoose =require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    //mostrar todos itens do db
    async index (req , res){
        const {page = 1} = req.query;
        const products = await Product.paginate({},{page,limit:10});

        return res.json(products);
    },
    //criar item no bd
    async store (req, res){
        const product = await Product.create(req.body);

        return res.json(product);
    },
    //mostrar item selecionado
    async show (req, res){
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },
    //fazer update em um item especifico
    async update (req, res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new:true});

        return res.json(product);
    },
    //deletar um item
    async destroy (req, res){
        await Product.findByIdAndRemove(req.params.id);

        return res.send();
    }
};