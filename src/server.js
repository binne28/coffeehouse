const express = require("express");
require("dotenv").config();
const sequelize = require("./configs/database"); // Kết nối DB
const syncDatabase = require('./configs/sync');
const app = express();
const port = process.env.PORT || 5000;
const router = require('./routes/index.router');
const cors = require('cors');
const session = require('express-session');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

//Import session
app.use(
  session({
    secret: process.env.SESSION_SECRET || "superkey",
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false, httpOnly: true, maxAge: 3600000},
  })
)

router(app);

// Kiểm tra kết nối DB trước khi chạy server
(async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Kết nối MySQL thành công!");

    // Đồng bộ database (nếu cần)
    await syncDatabase();

    // Chạy server sau khi kết nối DB
    app.listen(port, "0.0.0.0", () => {
      console.log(`🚀 Server đang chạy tại http://localhost:${port}`);
    });
  } catch (error) {
    console.error("❌ Không thể kết nối MySQL:", error);
  }
})();


