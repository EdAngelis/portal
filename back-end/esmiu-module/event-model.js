const mongoose = require('mongoose');
const shema = mongoose.Schema;

const eventShema = new shema({
    date:{type:Date},
    title:{type:String},
        body:
        [{  
            
            description:{type:String},
            date:{type:Date},
            links:
            [{
                title:{type:String},
                url:{type:String}
            }]
        }]
})

module.exports = mongoose.model('event', eventShema);