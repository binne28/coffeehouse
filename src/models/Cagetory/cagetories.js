const { DataTypes } = require('sequelize');
const sequelize = require('../../configs/database');

const Category = sequelize.define(
    "Category", 
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        img_url: {
            type: DataTypes.TEXT,
            allowNull: false
        },
    },
    {
        tableName: "Categories",
        timestamps: false
    }
); 

module.exports = Category;
