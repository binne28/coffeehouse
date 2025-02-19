const { DataTypes } = require("sequelize");
const sequelize = require("../configs/database");
//  DataTypes.STRING mac dich la 255 ky tu
// Datatypes.TEXT luu chuoi dai hon 255 ky tu
const Product = sequelize.define(
  "Product",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
    },
    size: {
      type: DataTypes.JSON,
    },
    img_url: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
  },
  {
    tableName: "Drinks",
    timestamps: false,
  }
);

// Gọi IIFE để chạy đồng bộ bảng
(async () => {
  try {
    await Product.sync({ force: false });
    console.log(`✅ Bảng Drinks đã được đồng bộ thành công!`);
  } catch (error) {
    console.error(`❌ Lỗi đồng bộ bảng Drinks: ${error}`);
  }
})(); // <== Thêm dấu () để thực thi hàm

module.exports = Product;
