const {validationResult} = require("express-validator");
const user = require("../models/users");
const {validatePassword, hashedPassword} = require("../services/passwordService");

module.exports.loginUser = async (req, res) =>
{
    const errors = validationResult(req);
    if(errors.isEmpty())
    {
        const {email, password} = req.body;
        try
        {
            const user = await user.findOne({email});
            if(user)
            {
                const check = validatePassword(user.password, password);
                if(check)
                {
                    return res.status(200).json({msg : "Login Success"});
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
                    const secure = await hashedPassword(password);
                    await userModel.create({name, phone, email, password : secure});
                    return res.status(200).json({msg : "Account Created Successfully."});
                }
                else
                {
                    return res.status(501).json({errors : [{ error : " Mobile Number already exists with another account! "}]});
                }
            }
            else
            {
                return res.status(501).json({errors : [{ error : " Email already exists with another account! "}]});
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