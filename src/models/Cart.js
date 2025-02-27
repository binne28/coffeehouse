const { DataTypes } = require("sequelize");
const sequelize = require("../configs/database");
const User = require('./User');
const Product = require('./Product');

const Cart = sequelize.define("Carts", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 1
    }
},{
    tableName: "Carts",
    timestamps: true,
});

//Quan he vs User va Product
Cart.belongsTo(User, {foreignKey: "user_id"});
Cart.belongsTo(Product, {foreignKey: "product_id"});

module.exports = Cart;