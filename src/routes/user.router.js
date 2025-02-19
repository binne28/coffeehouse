const express = require('express');
const router = express.Router();
const {register, login, logout} = require('../controllers/user.controller');
const checkUser = require('../validators/checkInputUser.validator');
const {authMiddle} = require('../middlewares/auth.middleware');

router.post('/register', checkUser, register);
router.post('/login', login);
router.post('/logout', logout);

module.exports = router;