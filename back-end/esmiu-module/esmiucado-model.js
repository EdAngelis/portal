const mongoose = require('mongoose');
const shema = mongoose.Schema;

const esmiucadoShema = new shema({
    esmiucado:{type:String, unique:true},
    img:{type:String},
    src:{type:String},
    date:{type:Date},
    eventEsmiu:  
        [{  
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
            
        }]
})

module.exports = mongoose.model('esmiucado', esmiucadoShema);

        
        
        