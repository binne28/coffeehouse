const Category = require('./cagetorie');
const Item = require('./Item');

Category.hasMany(Item, { foreignKey: "category_id" });
Item.belongsTo(Category, { foreignKey: "category_id" });

module.exports = { Category, Item };
