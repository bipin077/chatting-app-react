const express = require("express");
const {loginValidation, registerValidation, updatePasswordValidation, updateUserValidation} = require("../validations/userValidation");
const {loginUser, registerUser, getAllUsers, getSingleUsers, updatePassword, updateUserDetails, setOnline, setOffline} = require("../controllers/userController");

const router = express.Router();

router.post("/login", loginValidation, loginUser);
router.post("/register", registerValidation, registerUser);
router.get("/users/:id", getAllUsers);
router.get("/user/:id", getSingleUsers);
router.put("/changePassword", updatePasswordValidation, updatePassword);
router.put("/updateUserDetail", updateUserValidation, updateUserDetails);
router.put("/setOnline/:id", setOnline);
router.put("/setOffline/:id", setOffline);

module.exports = router;