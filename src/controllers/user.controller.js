const { validationResult } = require('express-validator');
const User = require('../modules/User.module');

const register = async (req, res) => {
    try {
        const { email, username, password, role } = req.body;

        // Kiểm tra user đã tồn tại chưa
        const existUsername = await User.findByUsername(username);
        const existEmail = await User.findByEmail(email);

        if (existEmail || existUsername) {
            return res.status(400).json({ success: false, message: "Email hoặc username đã tồn tại!" });
        }

        // Tạo user
        const newUser = await User.createUser(email, username, password, role);

        if (!newUser.success) {
            return res.status(400).json({ success: false, message: newUser.message });
        }

        return res.status(201).json({
            success: true,
            message: "Tạo tài khoản thành công!",
            data: {
                id: newUser.user.id,
                username: newUser.user.username,
                // roleList: newUser.roleList // 🔹 Đảm bảo roleList đúng format
            }
        });
    } catch (error) {
        console.error("Lỗi server:", error);
        return res.status(500).json({ success: false, message: "Lỗi server!", error: error.message });
    }
};


const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ success: false, message: "Missing credentials" });
        }
        const user = await User.logined(username, password);
        if (!user.success) {
            return res.status(400).json({ success: false, message: user.message });
        }

        //Lưu token vào session (nếu dùng session)
        if (req.session) {
            req.session.token = user.token;
        }

        return res.status(200).json({
            success: true,
            username: user.username,
            message: "Login successfully!!",
            token: user.token,
            roleList: { role: user.roleList} // Sửa userRole -> roleList
        });

    } catch (error) {
        console.error(' Server error:', error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
};

const logout = async (req, res) =>{
    req.session.destroy((err)=>{
        if(err) return res.status(500).json({message: 'Loi khi dang xuat'});
    })
    //Xoa cookie session
    res.clearCookie("connect.sid");
    res.status(200).json({message: "Dang xuat thanh cong"});
};

const getUser = async (req, res)=>{
    try{
        // const {username} = req.body;
        const user = await User.get();
        if(!user) return res.status(400).json({success: false, message: 'Not found user!'});
        return res.status(200).json({success: true, message: 'Get successfully', data: user})
    }catch (error) {
        console.error(`${error}`);
        return res.status(500).json({message: error.message});
    }
}

module.exports = {register, login, logout, getUser};