const mongoose = require('mongoose');
const shema = mongoose.Schema;

const noticeShema = new shema({
    bigTitle:{type:String},
    title:{type:String},
    subTitle:{type:String},
    body:{type:String},
    img:[{
        img:{type:String}
    }],
    href:{type:String},
    date:{type:Date},
    links:[{
        title:{type:String},
        url:{type:String}
    }],
    status:[{
        likes:{type:Number},
        shares:{type:Number}
    }]
})

module.exports = mongoose.model('notices', noticeShema);