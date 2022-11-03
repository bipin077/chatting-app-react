const mongoose = require("mongoose");


const chatSchema = mongoose.Schema({
    sender : {
        type : String,
        required : true
    },
    receiver : {
        type : String,
        required : true
    },
    replied_on : {
        type : String,
        default : null
    }

}, { timestamps : true });

const chatModel = mongoose.model("chat", chatSchema);
module.exports = chatModel;