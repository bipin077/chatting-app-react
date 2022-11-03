const express = require("express");

const {chatting} = require("../controllers/chatController");
const {validateChat} = require("../validations/chatValidation");

const route = express.Router();

route.post("/chats", validateChat, chatting);


module.exports = route;
