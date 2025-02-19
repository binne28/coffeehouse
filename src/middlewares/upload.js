const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Đường dẫn chính xác đến thư mục uploads
const uploadDir = path.join(__dirname, "../upload");

// Kiểm tra nếu thư mục chưa tồn tại, thì tạo nó
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir); // ✅ Đặt đúng biến, không phải chuỗi 'uploadDir'
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // ✅ Đúng cú pháp
    }
});

const upload = multer({ storage });

module.exports = upload;
