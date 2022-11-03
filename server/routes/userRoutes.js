const express = require("express");
const {loginValidation} = require("../validations/userValidation");
const {loginUser, registerUser} = require("../controllers/userController");

const router = express.Router();

router.post("/login", loginUser);
//router.post("/register", registerUser);

module.exports = router;