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

module.exports.updatePasswordValidation = [
    body('old').not().isEmpty().trim().escape().withMessage("Old Password Field is required."),
    body('newPassword').not().isEmpty().trim().escape().withMessage("New Password is required."),
    body('confirm').not().isEmpty().trim().escape().withMessage("Confirm Password is required.")
]

module.exports.updateUserValidation = [
    body('name').not().isEmpty().trim().escape().withMessage("Name is required."),
    body('phone').not().isEmpty().trim().escape().withMessage("Phone is required."),
    body('email').isEmail().trim().escape().normalizeEmail().withMessage("Email is required.")
]