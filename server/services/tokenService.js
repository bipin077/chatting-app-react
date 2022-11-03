const jwt = require("jsonwebtoken");
const env = require("../config/envconfig");


module.exports.generateToken = async (user) =>
{
    var token = await jwt.sign(user, env.JWT_SECRET, { expiresIn: '7d' });
    return token;
}

