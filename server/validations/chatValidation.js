const {body} = require("express-validator");

module.exports.validateChat = [
    body("sender").not().isEmpty().trim().escape().withMessage("Sender Id is not valid."),
    body("receiver").not().isEmpty().trim().escape().withMessage("Receiver Id is not valid.")
]