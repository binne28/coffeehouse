const express = require('express');
const router = express.Router();
const {adminMiddle,authMiddle} = require('../middlewares/auth.middleware')
const {created, getItem, deletedItem, updated} = require('../controllers/item.controller');   
const upload = require('../middlewares/upload');

router.post('/create/item', authMiddle, adminMiddle, upload.single('img_url'), created);
router.get('/get/item', authMiddle, adminMiddle, getItem);
router.post('/deleted/item', authMiddle, adminMiddle, deletedItem);
router.patch('/update/item/:id', authMiddle, adminMiddle, updated);

module.exports = router;