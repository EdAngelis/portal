const mongoose = require('mongoose')
const Schema = mongoose.Schema

const comentShema = new Schema ({
    pageName:{type:String},
    name:{type:String},
    msg:{type:String},
    date:{type:Date},
    likes:{type:Number},
    usersLies:[{
        user:{type:String}
    }],
    unlikes:{type:Number},
    reply:
    [{
        name:{type:String},
        msg:{type:String},
        date:{type:Date},
        likes:{type:Number},
        unlikes:{type:Number}
    }]
})

module.exports = mongoose.model('coments', comentShema)