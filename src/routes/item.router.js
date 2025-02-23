const express = require('express');
const router = express.Router();
const {adminMiddle,authMiddle} = require('../middlewares/auth.middleware')
const {created, getItem, deletedItem} = require('../controllers/item.controller');   
const upload = require('../middlewares/upload');

router.post('/create/item', authMiddle, adminMiddle, upload.single('img_url'), created);
router.get('/get/item', authMiddle, adminMiddle, getItem);
router.post('/deleted/item', authMiddle, adminMiddle, deletedItem);

module.exports = router;