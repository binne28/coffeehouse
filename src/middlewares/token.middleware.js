const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.session.token;
    if(!token) return res.status(401).json({message: 'Chua dang nhap'});

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if(err) return res.status(403).json({message: 'Token khong hop le'});
    })
    req.user = decoded;
    next();
};

module.exports = verifyToken;