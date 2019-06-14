'use strict'
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);

module.exports = {
    mongodb_LocalConection: 'mongodb://localhost:27017/camisaria',
    mongodb_Mlab: 'mongodb://DeAngelis84:Mlab4259@ds221095.mlab.com:21095/esmiucado',
    secretKey: 'SecretKey',
    salt,

}