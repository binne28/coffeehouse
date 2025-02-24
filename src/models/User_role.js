const { DataTypes } = require('sequelize');
const sequelize = require('../configs/database');

const User_Role = sequelize.define(
    "User_Role",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        role_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        tableName: 'User_Role',
        timestamps: false,
    }
);

module.exports = User_Role;