const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataBaseControls = new Schema ({
    
    codeDate: {type: Date},
    code: {type: Number},
    
});

    module.exports = mongoose.model('dataBaseControls', dataBaseControls);