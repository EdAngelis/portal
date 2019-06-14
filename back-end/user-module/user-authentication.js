const jwt = require('jsonwebtoken');
const config = require('./user-config');

exports.genToken = async (data) =>{
    const datasTotoken = {
        _id: data._id,
        name: data.name,
        email: data.email,
        roles: data.roles
    }
    return jwt.sign(datasTotoken, config.secretKey, {expiresIn: 300})
}