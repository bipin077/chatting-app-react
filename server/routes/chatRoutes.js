const express = require("express");

const {chatting, getAllChats} = require("../controllers/chatController");
const {validateChat} = require("../validations/chatValidation");

const route = express.Router();

route.post("/chats", validateChat, chatting);
route.get("/chats/:sender/:receiver", getAllChats);


module.exports = route;
