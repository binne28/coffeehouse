const express = require('express');
const route = express.Router();
const {createCategory} = require('../controllers/category.controller');
const {adminMiddle, authMiddle} = require('../middlewares/auth.middleware')
const upload = require('../middlewares/upload');

route.post('/create', authMiddle, adminMiddle, upload.single('img_url'), createCategory);

module.exports = route;