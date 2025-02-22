const express = require('express');
const router = express.Router();
const {adminMiddle,authMiddle} = require('../middlewares/auth.middleware')
const {created} = require('../controllers/item.controller');   
const upload = require('../middlewares/upload');

router.post('/create/item', authMiddle, adminMiddle, upload.single('img_url'), created);

module.exports = router;