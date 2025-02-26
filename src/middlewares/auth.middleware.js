const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();

const authMiddle =  async (req, res, next) =>{
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if(!token) return res.status(401).json({message: "Unauthorized: No token provided"});
        
        const decoded = jwt.verify(token, process.env.SECRET_KEY); // Giai ma token
        // console.log("Decoded token: ", decoded);
        
        const user  =  await User.findByPk(decoded.id);
        if(!user) return res.status(401).json({message: 'User not found!!'});
        req.user = user; 
        req.userRole = decoded?.role?.length > 0 ? decoded.role[0].authority : "USER";
        // console.log("User Role:", req.userRole);
        next();
    } catch (error) {
        res.status(403).json({message: 'Invalid token', error: error.message});
    }
}

const adminMiddle = async (req, res, next)=>{
    if(req.userRole !== 'ADMIN') {
        return res.status(403).json({message: 'Forbidden: Admin access required'});
    }
    next();
}

    
module.exports = {authMiddle, adminMiddle};