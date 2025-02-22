const { where } = require('sequelize');
const Users  = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
class User {
    static async findByUsername(username) {
        return await Users.findOne({where:  {username}});
    }

    static async findByEmail(email){
        return await Users.findOne({where: {email}});
    }

    static async createUser(email, username, password, role) {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(password, salt);
    
            // 🛑 Kiểm tra xem có Admin trong DB chưa
            const adminCount = await Users.count({ where: { role: "Admin" } });
    
            let userRole = "User";
            if (role === "Admin") {
                if (adminCount === 0) {
                    console.log("📌 Chưa có Admin nào, tạo tài khoản Admin đầu tiên!");
                    userRole = "Admin";
                } else {
                    return { success: false, message: "Bạn không có quyền tạo Admin!" };
                }
            }
    
            const user = await Users.create({ email, username, password: hashPassword, role: userRole });
    
            return user;
        } catch (error) {
            console.error("❌ Lỗi tạo tài khoản:", error);
            return { success: false, message: "Lỗi khi tạo tài khoản!", error: error.message };
        }
    }
    
    

    static async checkUser(username, password){
        try {
            const user = await this.findByUsername(username);
            if(!user) return {success: false, message: 'User not found'};
            const isPassword = await bcrypt.compare(password, user.password);
            if(!isPassword) return {success: false, message: 'Invalid password'};
            return {success: true, data: user};
        } catch (error) {
            console.error('Loi: ',  error);
            return {success: false, message: 'Internal server error'}
        }
    }

    static async logined(username, password){
        try {

            const user = await Users.findOne({where: {username}});
            if(!user)
                return {message: 'Login failed!!'}
            const isPassword = await bcrypt.compare(password, user.password);
            if(!isPassword)
                return {message: 'Invalid password'}
            
            //Tao token
            const token = jwt.sign(
                {id: user.id, username: user.username, email: user.email},
                process.env.SECRET_KEY,
                {expiresIn: '2h'} // Token het han
            );
            
            return { success: true, message: "Login successfully", token, userRole: user.role, username: user.username};
        } catch (error) {
            console.error('Login error: ', error);
            return {success: false, message: 'Server error'};
        }
    }
    static async get() {
        try {
            const users = await Users.findAll();
            if (users.length > 0) {
                return { message: 'Successfully', data: users };
            } else {
                return { message: 'No users found', data: [] };
            }
        } catch (error) {
            return { message: `${error}` };
        }
    }
    
} 


module.exports = User;