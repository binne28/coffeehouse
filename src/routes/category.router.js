const express = require('express');
const router = express.Router();
const {createCategory, getCategory, deleteCategory} = require('../controllers/category.controller');
const {adminMiddle, authMiddle} = require('../middlewares/auth.middleware')
const upload = require('../middlewares/upload');

router.post('/create', authMiddle, adminMiddle, upload.single('img_url'), createCategory);
router.get('/getAll', authMiddle, adminMiddle, getCategory);
router.delete('/deleted/:id', authMiddle, adminMiddle, deleteCategory);
module.exports = router;