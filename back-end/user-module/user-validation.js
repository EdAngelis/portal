const userSchema = require('./user-model');
const codeSchema = require('./dataBaseControls-model');
const send = require ('./user-nodemailer');
const moment = require('moment');

exports.emailValidation = async (data)=>{
    console.log("Validando Email")
    const searchEmail = await userSchema.findOne({'email':data.email})
    if(!searchEmail){
        const dateNow = moment()
        const code = Math.random().toFixed(7).substr(2)
        const codeToDB = new codeSchema({ code: code, codeDate: dateNow,})
        await codeToDB.save()
        send.emailOfConfirmation(data, code)
        return null
    }else{
        return ({email:"E-mail já cadastrado"})        
    }
}

exports.login = (data)=>{
    const errors = []
    //const er = /^[a-zA-Z0-9][a-zA-Z0-9\._-]+@([a-zA-Z0-9\._-]+\.)[a-zA-Z-0-9]{2}/;
    //if(!er.exec(data.email)){errors.push("Verifique se digitou o e-mail corretamente")}

    if(data.password == "")
        {errors.push("Digite sua Senha")}

    return errors
}