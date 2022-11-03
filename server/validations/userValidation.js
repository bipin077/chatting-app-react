const {body} = require("express-validator");

module.exports.loginValidation = [
    body('email').not().isEmpty().trim().escape().withMessage("Email Address is required."),
    body("password").not().isEmpty().trim().escape().withMessage("Password is required.")
]

module.exports.registerValidation = [
    body('name').not().isEmpty().trim().escape().withMessage("Name Field is required."),
    body('phone').not().isEmpty().trim().escape().withMessage("Mobile number is required."),
    body('email').not().isEmpty().trim().escape().withMessage("Email Address is required."),
    body("password").not().isEmpty().trim().escape().withMessage("Password is required.")
]