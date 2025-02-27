const { DataTypes } = require('sequelize');
const sequelize = require('../configs/database');

const Role = sequelize.define("Role", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    role_name: {
        type: DataTypes.STRING,
        unique: true
    }
}, {
    tableName: 'Role',
    timestamps: false
});

module.exports = Role; // Xuất model đúng cách
