const Items = require('../models/Cagetory/Item');

class ItemProduct{
    static async createItem(name, price, img_url, description, category_id){
        try {
            const item = await Items.create({name, price, img_url, description, category_id});
            return item;
        } catch (error) {
            return {message: 'Cannot create product'};
        }
    }
}


module.exports = ItemProduct;