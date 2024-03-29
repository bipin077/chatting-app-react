const mongoose = require("mongoose");
const env = require("./envconfig");

const connect = () =>
{
    mongoose.connect(env.DB_URL).then(()=>
    {
        console.log("Database Connected Successfully.");
    }).catch((error)=>
    {
        console.log("Failed to connect with database.");
    })
}

module.exports=  connect;