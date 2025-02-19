const { body, validationResult } = require('express-validator');

const checkUser = [
  body('email').isEmail().withMessage('Invalid Email'),

  body('username')
    .isLength({min: 5})
    .withMessage('Username must be at least 8 characters'),

  body('password')
    .isLength({ min: 10 })
    .withMessage('Password must be at least 10 characters')
    .matches(/[A-Z]/)
    .withMessage('Password must contain at least one uppercase letter')
    .matches(/[!@#$%^&*(),.?":{}|<>]/)
    .withMessage('Password must contain at least one special character'),
];

module.exports = checkUser;
