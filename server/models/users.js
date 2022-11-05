const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    phone : {
        type : Number,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    avatar : {
        type : String,
        default : ''
    },
    password : {
        type : String,
        required : true
    },
    isOnline : {
        type : Boolean,
        default : false
    }
}, { timestamps : true });

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;