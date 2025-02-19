const { validationResult } = require('express-validator');
const User = require('../modules/User.module');

const register = async (req, res) => {
    try {
        const { email, username, password, role } = req.body;
        // console.log("Nhận dữ liệu:", { email, username, password, role });

        //  Kiểm tra user đã tồn tại chưa
        const existUsername = await User.findByUsername(username);
        const existEmail = await User.findByEmail(email);

        if (existEmail || existUsername) {
            return res.status(400).json({ success: false, message: "Email hoặc username đã tồn tại!" });
        }

        // console.log(" Tạo User với vai trò:", role);
        
        //  Lấy quyền của người đăng ký (nếu có auth)
        const currentUserRole = req.user?.role || "User"; 

        //  Tạo user
        const newUser = await User.createUser(email, username, password, role, currentUserRole);

        if (!newUser || newUser.success === false) {
            return res.status(400).json({ success: false, message: newUser.message || "Không thể tạo tài khoản!" });
        }

        // console.log(" Tạo tài khoản thành công:", newUser.toJSON());

        return res.status(201).json({
            success: true,
            message: "Tạo tài khoản thành công!",
            data: { id: newUser.id, username: newUser.username, role: newUser.role },
        });

    } catch (error) {
        console.error("❌ Server Error:", error);
        return res.status(500).json({ success: false, message: "Lỗi server!", error: error.message });
    }
};


const login = async (req, res)=>{
    try {
        const {username, password} = req.body;
        if (!username || !password) {
            return res.status(400).json({ success: false, message: "Missing credentials" });
        }
        const user = await User.logined(username, password);
        if(!user) 
            return res.status(400).json({success: false, message: 'Login failed!!'});
        return res.status(200).json({
            success: true,
            message: 'Login successfully!!',
            token: user.token,
            user: {role: user.userRole, username: user.username}
        });
        req.session.token = user.token;
    } catch (error) {
        console.error('Server error: ', error);
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const logout = async (req, res) =>{
    req.session.destroy((err)=>{
        if(err) return res.status(500).json({message: 'Loi khi dang xuat'});
    })
    //Xoa cookie session
    res.clearCookie("connect.sid");
    res.status(200).json({message: "Dang xuat thanh cong"});
};

module.exports = {register, login, logout};