const express = require("express");
const env = require("./config/envconfig");
const connect = require("./config/dbconfig");
const cors = require("cors");
const userRouters = require("./routes/userRoutes");
const chatRouters = require("./routes/chatRoutes");

const app = express();

const port = env.PORT || 8000;

// connecting to database
connect();

// applying middlewares
app.use(cors());
app.use(express.json());
app.use("/api", userRouters);
app.use("/api", chatRouters);


app.listen(port, ()=>
{
    console.log(`Server is running on port : ${port}`);
})