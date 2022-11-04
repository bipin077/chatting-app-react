const {validationResult} = require("express-validator");
const userModel = require("../models/users");
const {validatePassword, hashedPassword} = require("../services/passwordService");
const {generateToken} = require("../services/tokenService");

module.exports.loginUser = async (req, res) =>
{
    const errors = validationResult(req);
    if(errors.isEmpty())
    {
        const {email, password} = req.body;
        try
        {
            const user = await userModel.findOne({email});
            if(user)
            {
                const check = await validatePassword(user.password, password);
                if(check)
                {
                    const token = await generateToken({ email : user.email });
                    return res.status(200).json({msg : "Login Success", user, token});
                }
                else
                {
                    return res.status(404).json({errors : [{ error : "Please enter valid password."}]});
                }
            }
            else
            {
                return res.status(404).json({errors : [{ error : "Please enter valid email and password."}]});
            }
        }
        catch(err)
        {
            return res.status(501).json({errors : [{ error : " Internal Server Error! ", error : err}]});
        }
    }
    else
    {
        return res.status(501).json({errors : errors.array()});
    }
}

module.exports.registerUser = async (req, res) =>
{
    const errors = validationResult(req);
    if(errors.isEmpty())
    {
        const {name, phone, email, password} = req.body;
        try{
            const emailExists = await userModel.findOne({email});
            if(!emailExists)
            {
                const phoneExists = await userModel.findOne({phone});
                if(!phoneExists)
                {                    
                    const hashed =  hashedPassword(password);
                    const user = await userModel.create({name, phone, email, password : hashed });
                    user.save();
                    const token = await generateToken({email});
                    return res.status(200).json({msg : "Account Created Successfully.", user, token});
                }
                else
                {
                    return res.status(501).json({error : [{ errors : " Mobile Number already exists with another account! "}]});
                }
            }
            else
            {
                return res.status(501).json({error : [{ errors : " Email already exists with another account! "}]});
            }
        }
        catch(error)
        {
            return res.status(501).json({errors : error});
        }
    }
    else
    {
        return res.status(501).json({errors : errors.array()});
    }
}

module.exports.getAllUsers = async (req, res) =>
{
    const {id} = req.params;
    try 
    {
        const users = await userModel.find({_id : { $ne : id }});
        return res.status(200).json({users});
    } 
    catch (error) {
        return res.status(501).json({errors : error});
    }
}

module.exports.getSingleUsers = async (req, res) =>
{
    const {id} = req.params;
    try 
    {
        const user = await userModel.findOne({_id : id });
        return res.status(200).json({user});
    } 
    catch (error) {
        return res.status(501).json({errors : error});
    }
}


module.exports.updatePassword = async (req, res) =>
{
    const errors = validationResult(req);
    if(errors.isEmpty())
    {
        const { userId, old, newPassword, confirm} = req.body;
        try{
            const user = await userModel.findOne({ _id : userId });
            if(user)
            {
                const check = await validatePassword(user.password, old);
                if(check)
                {
                    if(newPassword == confirm)
                    {
                        const hashed =  hashedPassword(newPassword);
                        await userModel.updateOne({_id : userId}, {$set : { password : hashed} })
                        return res.status(200).json({msg : "Password Updated Successfully."});
                    }
                    else
                    {
                        return res.status(501).json({errors : [{ msg : " New and confirm password not match! "}]});
                    }
                }
                else
                {
                    return res.status(501).json({errors : [{ msg : "Old password not match. "}]});
                }
            }
            else
            {
                return res.status(501).json({errors : [{ msg : " User not found! "}]});
            }
        }
        catch(error)
        {
            return res.status(501).json({errors : error});
        }
    }
    else
    {
        return res.status(501).json({errors : errors.array()});
    }
}


module.exports.updateUserDetails = async (req, res) =>
{
    const errors = validationResult(req);
    if(errors.isEmpty())
    {
        const { userId, name, phone, email, avatar} = req.body;
        try{
            const user = await userModel.findOne({ _id : userId });
            if(user)
            {
                await userModel.updateOne({_id : userId}, {$set : { name, phone, email, avatar} })
                return res.status(200).json({msg : "Details Updated Successfully."}); 
            }
            else
            {
                return res.status(501).json({errors : [{ msg : " User not found! "}]});
            }
        }
        catch(error)
        {
            return res.status(501).json({errors : error});
        }
    }
    else
    {
        return res.status(501).json({errors : errors.array()});
    }
}

