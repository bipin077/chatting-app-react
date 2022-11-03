const {validationResult} = require("express-validator");
const {chatModel} = require("../models/chats");


module.exports.chatting = async (req, res) =>
{
    const errors = validationResult(req);
    if(errors.isEmpty())
    {
        const {sender, receiver, replied_on} = req.body;
        try {
            await chatModel.create({sender, receiver, replied_on});
            return res.status(200).json({msg : "Message Send Successfully."});
        } 
        catch (err) {
            return res.status(501).json({errors : [{ error : " Internal Server Error! ", error : err}]});
        }
    }
    else
    {
        return res.status(501).json({errors : errors.array()});
    }
}