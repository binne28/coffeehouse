// sync.js
const sequelize = require('./database');  // Đảm bảo đường dẫn đúng
const User = require('../models/User');   // Import model User
const Product = require('../models/Product');
// const Foods = require('../models/food');
const Category = require('../models/Cagetory/cagetories');
const CategoryItem = require('../models/Cagetory/Item');
const Role = require('../models/Role');
const User_Role = require('../models/User_role');
const Order = require('../models/Order');
const Cart = require('../models/Cart');
console.log(Role);

const syncDatabase = async () => {
    try {
        // Đồng bộ hóa bảng Users
        await User.sync({ alter: false }); // Tạo bảng nếu chưa tồn tại
        await Product.sync({alter: true});
        // await Foods.sync({force: false});
        await Category.sync({force: false});
        await CategoryItem.sync({force: true});
        await Role.sync({force: false});
        await User_Role.sync({force: false});
        await Order.sync({force: false});
        await Cart.sync({force: false});
        console.log('✅ Bảng Users đã được đồng bộ thành công!');
        console.log('✅ Bảng Drinks đã được đồng bộ thành công!');
    } catch (error) {
        console.error('❌ Lỗi đồng bộ bảng Users:', error);
    }
};

module.exports = syncDatabase;
