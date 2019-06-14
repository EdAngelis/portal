const noticeShcema = require('../models/notice-model')
const comentShcema = require('../models/coments-model')
const send = require ('../services/nodemailer');
const moment = require('moment')

exports.addNotice = (req, res, next) =>{
    const newNotice = new noticeShcema(req.body);
    newNotice.save()
    .then(data=>{
        res.status(201).send(data);
    }).catch(error=>{
        console.log(error);
        res.status(400).send(error);
    });
}

exports.getNoticeList = async (req, res, next)=>{
   const listNotice = await noticeShcema.find({})
    res.send(listNotice)
    
    
}

exports.getNotice = async (req, res, next)=>{
    await noticeShcema.findOne({href:req.params.pageName})
    .then(result =>{
        res.send(result)
    }).catch(error=>{
        res.send("Noticia não Encontrada", error)
    })
     
     
     
 }
 
 exports.addComent = async (req, res, next)=>{
     send.notificationComent(req.body.pageName)
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

 exports.getComents = async (req, res, next)=>{
     const coments = await comentShcema.find({pageName:req.params.pageName});
     res.status(200).send(coments);
 }

 exports.addReplicComent = async (req, res, next)=>{
     const coment = await comentShcema.findById(req.body._id)
 /*    const reply = await new comentShcema({
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
     })*/
     console.log(coment.reply[0]) 
 }