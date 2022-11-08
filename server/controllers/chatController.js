const {validationResult} = require("express-validator");
const chatModel = require("../models/chats");


module.exports.chatting = async (req, res) =>
{
    const errors = validationResult(req);
    if(errors.isEmpty())
    {
        const {sender, receiver, message, replied_on, send_by} = req.body;
        try {
            const result = await chatModel.create({sender, receiver, message, replied_on, send_by});
            result.save();
            return res.status(200).json({msg : "Message Send Successfully."});
        } 
        catch (error) {
            return res.status(501).json({errors : [{ msg : " Internal Server Error! ", error : error}]});
        }
    }
    else
    {
        return res.status(501).json({errors : errors.array()});
    }
}

module.exports.getAllChats= async (req, res) =>
{
    const {sender, receiver} = req.params;
    try 
    {
       const chats = await chatModel.find( { $or: [ { sender: sender, receiver : receiver },{ sender: receiver, receiver : sender } ] } );
       return res.status(200).json({chats});
    } 
    catch (error) {
        return res.status(501).json({error});
    }
}