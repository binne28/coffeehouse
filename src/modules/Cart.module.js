const Cart = require("../models/Cart");

class Carts {
    /**
     * Thêm sản phẩm vào giỏ hàng
     * @param {number} user_id - ID của người dùng
     * @param {number} product_id - ID của sản phẩm
     * @param {number} quantity - Số lượng sản phẩm
     * @returns {object} - Trạng thái thêm vào giỏ hàng
     */
    static async addToCart(user_id, product_id, quantity) {
        try {
            // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
            let cartItem = await Cart.findOne({ where: { user_id, product_id } });

            if (cartItem) {
                // Nếu đã có, cập nhật số lượng
                cartItem.quantity += quantity;
                await cartItem.save();
            } else {
                // Nếu chưa có, tạo mới
                cartItem = await Cart.create({ user_id, product_id, quantity });
            }

            return { success: true, message: "Added to cart", cartItem };
        } catch (error) {
            return { success: false, message: "Error adding to cart", error: error.message };
        }
    }

    /**
     * Lấy danh sách giỏ hàng của người dùng
     * @param {number} user_id - ID của người dùng
     * @returns {object} - Danh sách giỏ hàng
     */
    static async getCart(user_id) {
        try {
            const cart = await Cart.findAll({
                where: { user_id },
                include: [{ association: "Product" }] // Đảm bảo có quan hệ với bảng "Product"
            });

            return { success: true, cart };
        } catch (error) {
            return { success: false, message: "Error fetching cart", error: error.message };
        }
    }

    /**
     * Xóa sản phẩm khỏi giỏ hàng
     * @param {number} cart_id - ID của mục trong giỏ hàng
     * @returns {object} - Trạng thái xóa sản phẩm
     */
    static async removeItemCart(cart_id) {
        try {
            // Tìm sản phẩm trong giỏ hàng theo ID
            const cartItem = await Cart.findByPk(cart_id);

            if (!cartItem) {
                return { success: false, message: "Item not found in cart" };
            }

            // Xóa sản phẩm khỏi giỏ hàng
            await cartItem.destroy();
            return { success: true, message: "Removed from cart" };
        } catch (error) {
            return { success: false, message: "Error removing item", error: error.message };
        }
    }
}

module.exports = Carts;
