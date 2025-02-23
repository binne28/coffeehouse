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
    
    static async deleted(id){
        try {
            const item = await Items.findByPk(id);
            if(!item) return {success: false, message: 'Item not found!'};
            await Items.destroy();
            return {success: true, message: 'Deleted item successfully!'};
        } catch (error) {
            return {success: false, message: message.error};
        }
    }
    static async getItem(){
        try {
            const item = await Items.findAll();
            if(!item) return {success: false, message: 'There are no products'};
            return {success: true, item};
        } catch (error) {
            return {success: false, message: message.error};
        }
    }
}


module.exports = ItemProduct;