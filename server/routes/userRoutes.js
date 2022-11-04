const express = require("express");
const {loginValidation, registerValidation} = require("../validations/userValidation");
const {loginUser, registerUser, getAllUsers, getSingleUsers} = require("../controllers/userController");

const router = express.Router();

router.post("/login", loginValidation, loginUser);
router.post("/register", registerValidation, registerUser);
router.get("/users/:id", getAllUsers);
router.get("/user/:id", getSingleUsers);

module.exports = router;