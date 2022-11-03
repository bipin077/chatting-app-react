const mongoose = require("mongoose");
const env = require("./envconfig");

const connect = () =>
{
    mongoose.connect("mongodb+srv://chatting:chatting@cluster0.9nhgkax.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>
    {
        console.log("Database Connected Successfully.");
    }).catch((error)=>
    {
        console.log("Failed to connect with database.");
    })
}

module.exports=  connect;