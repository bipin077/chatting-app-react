const bcrypt = require("bcrypt");

module.exports.hashedPassword = (password) =>
{
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    return hash;      
}

module.exports.validatePassword = async (oldPassword, newPassword) =>
{
    const result = await bcrypt.compare(newPassword, oldPassword);
    if(result)
    {
        return true;
    }
    else
    {
        return false;
    }
}