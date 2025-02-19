const {getAlls, create} = require('../controllers/product.controller');
const express = require('express');
const router = express.Router();
const {authMiddle, adminMiddle} = require('../middlewares/auth.middleware');
const {createCategory} = require('../modules/Category.module');

router.post('/create', authMiddle, create);
router.get('/getAll', getAlls);
router.post('/category/create', authMiddle, adminMiddle, createCategory);


module.exports = router;
