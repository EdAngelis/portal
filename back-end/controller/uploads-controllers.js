const noticeShcema = require('../models/notice-model')
const comentShcema = require('../models/coments-model')
//const esmiucadoShema = require('../models/esmiucado-model');
//const eventShema = require('../models/event-model');
const moment = require('moment')

exports.addNotice = (req, res, next) =>{
    console.log(req.body)
    const newNotice = new noticeShcema(req.body);
    newNotice.date = moment()
    newNotice.save()
    .then(data=>{
        res.status(201).send(data);
    }).catch(error=>{
        console.log(error);
        res.status(400).send(error);
    }); 
}
 
 exports.addComent = async (req, res, next)=>{
     
    const newComent = await new comentShcema({
        pageName : req.body.pageName,
        name : req.body.name,
        msg : req.body.msg,
        date : moment()
     })
     await newComent.save()
     .then(data=>{
         console.log("Coment Adcionado")
        res.status(201).send(data);
    }).catch(error=>{
        console.log(error);
        res.status(400).send(error);
    });
     
 }


 exports.addReplicComent = async (req, res, next)=>{
     console.log(req.body._id)
     const coment = await comentShcema.findById(req.body._id)
     const reply = await new comentShcema({
        name:req.body.name,
        msg:req.body.msg,
        date:moment(),
        likes:0,
        unlikes:0
     })
     coment.reply.push(reply)
     await coment.save()
     .then(data=>{
         console.log("Reply Created")
         res.status(201).send(data)
     }).catch(error=>{
         console.log(error)
         res.status(400).send(error)
     })
     console.log(coment)
 }



