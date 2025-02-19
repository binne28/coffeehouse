const { DataTypes } = require('sequelize');
const sequelize = require('../../configs/database');
const Category = require('../Cagetory/cagetories'); // Sửa lỗi chính tả

const Item = sequelize.define(
    "Item",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Category,
                key: "id"
            },
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        },
    },
    {
        tableName: "Items", // Đổi thành số nhiều cho nhất quán
        timestamps: false
    }
);

module.exports = Item;
