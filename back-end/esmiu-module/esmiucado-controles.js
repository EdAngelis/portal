const esmiucadoShema = require('./esmiucado-model');
const eventShema = require('./event-model');
const repository = require('./esmiu-repository')
const moment = require('moment')

exports.add = async (req, res, next)=> {
   if(req.body.selectEsmiu != "Cadastrar Novo")
   {    
       if(req.body.updateEvent === false)
       { 
            const newEvent = await repository.addEvent(req.body)
            .then(salved=>{
                console.log("Salved",salved)
            }).catch(error=>{
                console.log("Error",error)
            })
       }else{
          const updated = repository.updateEvent(req.body)
          .then(salved=>{
              res.status(200).send(salved)
          }).catch(error=>{
              res.status(400).send("Ocorreu algum Erro", error)
          })
       }
   }else{
           await repository.registerEsmiu(req.body)
           .then(salved=>{
            res.send("Esmiu Salved")
          }).catch(error=>{
            res.send("Não foi possível salvar", error)
          })
          
   }
}

exports.registerEsmiu = async (req, res, next)=> {
    const newEsmicado = new esmiucadoShema (req.body);
    await newEsmicado.save()
    .then(data=>{
        console.log("Created")
        res.send(data);
    }).catch(error=>{
        console.log(error)
        res.send(error);
    })
}

exports.addEvent = async (req, res, next)=>{
    const newEvent = new eventShema (req.body);
    newEvent.date = moment()
    await newEvent.save()
    .then(data=>{
        console.log("Created")
        res.send(data);
    }).catch(error=>{
        console.log(error)
        res.send(error);
    })
}

exports.getEsmiu = async (req, res, next) =>{
    const esmiucadoList = await esmiucadoShema.find({});
    res.status(200).send(esmiucadoList);
}

exports.getEvents = async (req, res, next) =>{
    
    const esmiu = await esmiucadoShema.findOne({src:req.params.pageName});
    res.status(200).send(esmiu.eventEsmiu);
}

exports.eventList = async (req, res, next) =>{
    const events = await esmiucadoShema.findOne({esmiucado:req.body.selectEsmiu})
    res.status(200).send(events)
}

exports.removeEvent = async (req, res, next)=>{
    const esmiu = await esmiucadoShema.findOne({esmiucado:req.body.selectEsmiu})
    await esmiu.eventEsmiu.id(req.body.selectEvent).remove()
    esmiu.save()
    .then(salved=>{ console.log("Salve"), res.status(200).send("Salved")})
    .catch(error=>{ console.log("Não foi possível salvar",error)})
}