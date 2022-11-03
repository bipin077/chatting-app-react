const bcrypt = require("bcrypt");

module.exports.hashedPassword = async (password) =>
{
    await bcrypt.hash(password, 10, function(error, hash) {
        if(!error)
        {
            return hash;
        }
    });
}

module.exports.validatePassword = (oldPassword, newPassword) =>
{
    bcrypt.compare(newPassword, oldPassword, function(error, result) {
        if(!error)
        {
            return result;
        }
    });
}