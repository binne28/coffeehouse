const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();

const authMiddle =  async (req, res, next) =>{
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if(!token)
            return res.status(401).json({message: "Unauthorized"});
        
        const decoded = jwt.verify(token, process.env.SECRET_KEY); // Giai ma token
        const user  =  await User.findByPk(decoded.id);
        if(!user)
            return res.status(401).json({message: 'User not found!!'});
        req.user = user; //Luu thong tin user vao req
        next();
    } catch (error) {
        res.status(403).json({message: 'Invalid token'});
    }
}

const adminMiddle = async (req, res, next)=>{
    if(req.user.role !== 'Admin') {
        return res.status(403).json({message: 'Forbidden: Admin access required'});
    }
    next();
}

    
module.exports = {authMiddle, adminMiddle};