const { DataTypes } = require('sequelize');
const sequelize = require('../configs/database');

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
        role: {
            type: DataTypes.ENUM("User", "Admin"),
            defaultValue: "User",
        }
    },
    {
        tableName: 'Users',
        timestamps: true,
    }
);

// Đồng bộ hóa bảng Users
(async () => {
    try {
        await User.sync({ force: false }); // Chỉ tạo bảng nếu chưa tồn tại
        console.log('✅ Bảng Users đã được đồng bộ thành công!');
    } catch (error) {
        console.error('❌ Lỗi đồng bộ bảng Users:', error);
    }
});

module.exports = User;
