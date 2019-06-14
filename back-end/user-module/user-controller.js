const userSchema = require('./user-model');
const bcrypt = require('bcrypt');
const auth = require('./user-authentication');
const repository = require('./user-repositorio');
const validation = require('./user-validation');
const dataBaseCtrl = require('./dataBaseControls-model');
const send = require ('./user-nodemailer');
const jwt = require('jsonwebtoken');
const config = require('./user-config');

exports.emailContact = async (req, res, next)=>{
    const sendMsg = await send.msgContact(req.body);
    res.json(sendMsg)
    console.log(sendMsg)
}

exports.emailValiadtion = async (req, res, next)=>{
    console.log("Chegou no validação")
     const validate = await validation.emailValidation(req.body)
     res.send(validate)
}

exports.getUser = async (req, res, next)=>{
   await jwt.verify(req.body.token, config.secretKey, function(error, decoded){
       if(decoded)
       {
             userSchema.findOne({'_id':decoded._id})
            .then(data=>{
                res.status(200).send(data);
            }).catch(erro=>{
                res.status(400).send(erro);
            })   
       }else res.send("Token: Invalido")
   })  
   
}

exports.registerUser = async (req, res, next)=>{
    const userLogin = req.body
    // Search cod sended to email user and salved in DB
    const findCode = await dataBaseCtrl.findOne({'code':req.body.code})
    if(findCode){
     await dataBaseCtrl.findByIdAndRemove({_id: findCode._id})
     await repository.registerUser(req.body);        
      const token = await auth.genToken({
        _id: userLogin._id,
        name: userLogin.name,
        email: userLogin.email,
        roles: userLogin.roles
      });   
        console.log("token",token);
        userLogin.password = undefined
        res.json({ token, userLogin });

        
    }else{
        res.json({message:"Codigo Invalido"})
    }
       
}

exports.login = async (req, res, next)=>{
    const error = []
    const valLogin = validation.login(req.body);
    if(valLogin.length == 0 ){
        const userLogin = await userSchema.findOne({'email':req.body.email}).select('+password');
        if(userLogin != null){
            const loginAuth = await bcrypt.compareSync(req.body.password , userLogin.password);
            if (loginAuth)
            {
                const token  = await auth.genToken(
                {
                    _id: userLogin._id,
                    name: userLogin.name,
                    email: userLogin.email,
                    roles: userLogin.roles
                });                
                  //  console.log("Token!!",token);
                    userLogin.password = undefined
                    res.json({token});
            }else{
                error.push("Senha Não Confere")
                res.send(error)
                console.log("Senha Não Confere");
            }
        }else{
            error.push("E-mail não cadastrado")
            res.send(error)
            console.log("E-mail não cadastrado")
        }
    }else{
        res.send(valLogin)
        console.log(valLogin)
    }
    
        
}
