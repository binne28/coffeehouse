const Items = require('../models/Cagetory/Item');

class ItemProduct{
    static async createItem(name, price, imgUrl, description, category_id){
        try {
            const item = await Items.create({name, price, img_url: imgUrl, description, category_id});
            return item;
        } catch (error) {
            // console.error(error);
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

    static async getItem(id){
        try {
            const item = await Items.findByPk(id);
            if(!item) return {message: 'Not found item'};
            return item;
        } catch (error) {
            return {message: message.error};  
        }
    }

    static async updateItem(id, data){
        try {
            const [affectedRows] = await Items.update(data, {where: id});
            if(affectedRows === 0){
                console.log('Not found Item');
                return null;
            }
            return await Items.findByPk(id);
        } catch (error) {
            return {message: error.message};
        }
    }
};


module.exports = ItemProduct;