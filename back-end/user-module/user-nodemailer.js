'use strict'
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service:'Yahoo',
 //   host: "smtp.gmail.com",
 //   port: 465,
 //   secure: true, // true for 465, false for other ports
    auth: {
        user: "ed4ngelis@yahoo.com",
        pass: "yahoo(77722)"
    },
    tls: { rejectUnauthorized: false }
    });

    exports.msgContact = async (data)=>{

        const mailOptions = {
        from: "ed4ngelis@yahoo.com",
        to: "ed4ngelis@yahoo.com",
        subject: data.assunto,
        text: "Menssagem de:"+ data.name +" Email:"+data.email+"Menssagem:"+data.msg
      //    Para envio de anexos
      //  attachments: [{ // Basta incluir esta chave e listar os anexos
      //  filename: 'boleto.pdf', // O nome que aparecerá nos anexos
      //  path: 'servidor/boletos/boleto_gerado1234.pdf' // O arquivo será lido neste local ao ser enviado
      //    }]
        };

      const sendEmail = await transporter.sendMail(mailOptions)
        .then(ok =>{
            console.log(ok)
            return ({enviada:"Menssagem Enviada"})
        }).catch(error=>{
            console.log(error)
            return ({error:"Menssagem não enviada"})
        })

}

exports.emailOfConfirmation = (data, code)=>{
    
  const mailOptions = {
  from: 'ed4ngelis@yahoo.com',
  to: data.email,
  subject: 'Validação de E-mail',
  text: ('Este é seu código de validação', code),
//    Para envio de anexos
//  attachments: [{ // Basta incluir esta chave e listar os anexos
//  filename: 'boleto.pdf', // O nome que aparecerá nos anexos
//  path: 'servidor/boletos/boleto_gerado1234.pdf' // O arquivo será lido neste local ao ser enviado
//    }]
  };

  transporter.sendMail(mailOptions, function(error, info){
  if (error) {
      console.log(error);
  } else {
      console.log('Email enviado: ' + info.response);
  }
  });

}