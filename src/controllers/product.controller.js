const Drinks = require('../modules/Product.module');

const getAlls = async (req, res)=>{
    try {
        const product = await Drinks.getAll();
        // console.log(product);
        
        if(!product){
            return res.status(400).json({message: 'There are no products'});
        }
        return res.status(200).json({message: 'Successfully!!', data: product});
    } catch (error) {
        return res.status(500).json({message: message.error});
    }
}

const create = async (req, res) =>{
    try {
        const {name, price, size, img_url, description} = req.body;
        const drink = await Drinks.createDrink(name, price, size, img_url, description);
        if(!drink) return res.status(400).json({success: false, message: 'Cannot create drink!'});
        return res.status(201).json({success: true, message: 'The drink has been successfully created!'})
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}



module.exports = {getAlls, create}

