const Drinks = require('../models/Product');
 
class Drink{
    static async getAll(){
        const drink = await Drinks.findAll();
        return drink;
    }

    static async getDrinkByName(name){
        const drink = await Drinks.findOne({where: {name}});
        try {
            if(!drink){
                return null;
            }
            return drink;
        } catch (error) {
            console.log(error);
        }
    }

    static async createDrink(name, price, size, img_url, description){
        try {
            const drink = await Drinks.create({name, price, size, img_url, description});
            console.log("📌 Drink created:", drink.toJSON());
            if(drink)
                return {success: true, message: 'The drink has been successfully created!', data: drink};
            else return {success: false, message: 'Cannot create drink!'};
        } catch (error) {
            console.error("❌ Error when creating drink: ", error);
            return {success: false, message: 'An error occurred while creating the drink.', error: error.message}
        }
    }
}

module.exports = Drink;