const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../configs/cloudinary');

// Cấu hình storage Cloudinary cho Multer
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'uploads', // Tên thư mục trên Cloudinary
        format: async (req, file) => 'png', // Định dạng ảnh (png, jpg, etc.)
        public_id: (req, file) => file.originalname.split('.')[0] // Đặt tên file theo tên gốc
    }
});

const upload = multer({ storage });

module.exports = upload;
