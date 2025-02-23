const Categories = require('../models/Cagetory/cagetories');

class Category{
    static async createCategory(name, img_url){
        try {
            let existCategory = await Categories.findOne({where: {name}});
            if(existCategory) return {message: `⚠️ ${existCategory} already`, existCategory};

            existCategory = await Categories.create({name, img_url});
            return {message: `✅ ${existCategory} created successfully!!`, existCategory};
        } catch (error) {
            console.error(error);
        }
    }

    static async getCategory(){
        try {
            const category = await Categories.findAll();
            return category;
        } catch (error) {
            console.error(error);
            return {success: false};
        }
    }
    static async deleted(id){
        try {
            // Truy van tim danh muc
            const category = await Categories.findByPk(id);
            if(!category) return{success: false, message: 'Category not found'};
            //Xoa danh muc khoi db
            await category.destroy();
            return {success: true, message: 'Delete successfully!!'};
        } catch (error) {
            return {success: false, message: message.error};
        }
    }
}


module.exports = Category;