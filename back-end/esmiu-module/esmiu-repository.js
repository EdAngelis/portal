const esmiucadoShema = require('./esmiucado-model');
const eventModel = require('./event-model')
const moment = require('moment')

exports.registerEsmiu = async (data)=>{
    const newEsmiu = new esmiucadoShema({
        esmiucado:data.esmiucado,
        img:data.img,
        src:data.src,
        date:moment(),
        eventEsmiu:  
            [{  
                date:moment(),
                title:data.title,
                body:
                    [{  
                        description:data.description,
                        date:moment(),
                        links:
                        [{
                            title:data.linkTitle,
                            url:data.url
                        }]
                    }]
                
            }]
    })
   console.log(newEsmiu.eventEsmiu[0])
    console.log("Model", newEsmiu)
    newEsmiu.save()
    .then(salved=>{
        console.log("Salved")
        return salved
    })
}

exports.addEvent = async (data)=>{
    var esmiu = await esmiucadoShema.findOne({esmiucado:data.selectEsmiu})
    esmiu.date = moment()
    const newEvent = await new eventModel({
        date: moment(),
        title: data.title,
        body:
        [{  
            
            description:data.description,
            date:moment(),
            links:
            [{
                title:data.linkTitle,
                url:data.url
            }]
        }]
    })
   await esmiu.eventEsmiu.push(newEvent)
   console.log(esmiu)
    esmiu.save()
}

exports.updateEvent = async (data)=>{
    const esmiu = await esmiucadoShema.findOne({esmiucado:data.selectEsmiu})
    const newBody = await {              
            description:data.description,
            date:moment(),
            links:
            [{
                title:data.linkTitle,
                url:data.url
            }]
        }
    await esmiu.eventEsmiu.id(data.selectEvent).body.push(newBody)
    esmiu.save()
    .then(salved=>{
        console.log("Salved")
    }).catch(error=>{
        console.log("Não foi possível salvar")
    })
}