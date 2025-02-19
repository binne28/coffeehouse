// sync.js
const sequelize = require('./database');  // Đảm bảo đường dẫn đúng
const User = require('../models/User');   // Import model User
const Product = require('../models/Product');
// const Foods = require('../models/food');
const Category = require('../models/Cagetory/cagetories');
const CategoryItem = require('../models/Cagetory/Item');
const syncDatabase = async () => {
    try {
        // Đồng bộ hóa bảng Users
        await User.sync({ force: false }); // Tạo bảng nếu chưa tồn tại
        await Product.sync({alter: true});
        // await Foods.sync({force: false});
        await Category.sync({alter: true});
        await CategoryItem.sync({force: true});
        console.log('✅ Bảng Users đã được đồng bộ thành công!');
        console.log('✅ Bảng Drinks đã được đồng bộ thành công!');
    } catch (error) {
        console.error('❌ Lỗi đồng bộ bảng Users:', error);
    }
};

module.exports = syncDatabase;
