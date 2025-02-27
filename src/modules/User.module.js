const { where } = require('sequelize');
const Users  = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Role = require('../models/Role');
const User_Role = require('../models/User_role');
require('dotenv').config();
class User {
    static async findByUsername(username) {
        return await Users.findOne({where:  {username}});
    }

    static async findByEmail(email){
        return await Users.findOne({where: {email}});
    }

    static async createUser(email, username, password, role = "User") {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(password, salt);
    
            if (role === "Admin") {
                const adminExists = await Users.findOne({
                    include: {
                        model: Role,
                        where: { role_name: "Admin" }
                    }
                });
    
                if (adminExists) {
                    return { success: false, message: "Bạn không có quyền tạo Admin!" };
                }
            }
    
            const user = await Users.create({ email, username, password: hashPassword });
            const userRole = await Role.findOne({ where: { role_name: role || "User" } });
    
            if (userRole) {
                await User_Role.create({ user_id: user.id, role_id: userRole.id });
            }
    
            // 🔹 Gán danh sách role vào user để trả về response đúng
            const roleList = [{ authority: userRole.role_name }];
    
            return { success: true, message: "Tạo tài khoản thành công!", user, roleList };
    
        } catch (error) {
            console.error("Lỗi tạo tài khoản:", error);
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

    static async logined(username, password) {
        try {
            const user = await Users.findOne({
                where: { username },
                include: [{ model: Role, attributes: ['role_name'], through: { attributes: [] } }] // Lấy danh sách role
            });

            if (!user) {
                return { success: false, message: 'Login failed!!' };
            }
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return { success: false, message: 'Invalid password' };
            }
            //Lay danh sach role tu database
            const roles = user.Roles.map(role => role.role_name);

            // Nếu có ADMIN, trả về ADMIN. Nếu không, trả về USER
            const roleList = roles.includes("ADMIN") 
                ? [{ authority: "ADMIN" }] 
                : [{ authority: "USER" }];
            const token = jwt.sign(
                {
                    id: user.id,
                    username: user.username,
                    email: user.email,
                    role: roleList
                },
                process.env.SECRET_KEY,
                { expiresIn: '2h' }
            );

            return {
                success: true,
                message: "Login successfully",
                token,
                username: user.username,
                roleList // Trả về danh sách role
            };

        } catch (error) {
            console.error('Login error:', error);
            return { success: false, message: 'Server error', error: error.message };
        }
    }

    static async get() {
        try {
            const users = await Users.findAll({attributes: ['email', 'username']});
            if (users.length > 0) {
                return { message: 'Successfully', data: users};
            } else {
                return { message: 'No users found', data: [] };
            }
        } catch (error) {
            return { message: `${error}` };
        }
    }
} 


module.exports = User;