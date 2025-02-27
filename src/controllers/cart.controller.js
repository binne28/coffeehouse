const Cart = require('../modules/Cart.module');

const addCart = async (req, res)=>{
    try {
        const {user_id, product_id} = req.params;
        const {quantity} = req.body; 
        const cartItem = await Cart.addToCart(user_id, product_id, quantity);
        return res.status(201).json({success: true, messsage: 'Add to cart successfully!'});
    } catch (error) {
        console.error(error);
        return res.status(500).json({success: false, message: error.message});
    }
}

const getCart = async (req, res)=>{
    try {
        const {user_id} = req.params;
        // const
    } catch (error) {
        
    }
}

module.exports = {addCart};