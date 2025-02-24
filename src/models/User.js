const { DataTypes } = require('sequelize');
const sequelize = require('../configs/database');
const Role = require('./Role');
const User = sequelize.define(
    "User",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
        },
    },
    {
        tableName: 'Users',
        timestamps: true,
    }
);

User.belongsToMany(Role, { through: "User_Role", foreignKey: "user_id" });
Role.belongsToMany(User, { through: "User_Role", foreignKey: "role_id" });


module.exports = User;
