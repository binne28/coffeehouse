const express = require('express');
const router = express.Router();
const {addCart} = require('../controllers/cart.controller');


router.post('/addCart/:user_id/:product_id', addCart);

module.exports = router;