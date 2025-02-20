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
}


module.exports = Category;