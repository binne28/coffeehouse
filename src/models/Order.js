const { DataTypes } = require("sequelize");
const sequelize = require("../configs/database");
const User = require("./User"); // Import User model

const Order = sequelize.define("Orders", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    order_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    status: {
        type: DataTypes.INTEGER,
        defaultValue: "PENDING"
    },
    user_id: {  // Thêm cột user_id
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User, 
            key: "id"
        }
    }
}, {
    tableName: "Orders",
    timestamps: true,
});

// Thiết lập quan hệ với User
Order.belongsTo(User, { foreignKey: "user_id" });
User.hasMany(Order, { foreignKey: "user_id" });

module.exports = Order;
