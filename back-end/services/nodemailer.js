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



exports.notificationComent = (data)=>{
    

        const mailOptions = {
        from: 'ed4ngelis@gmail.com',
        to: "ed4ngelis@gmail.com",
        subject: 'Esmiuçado Coment',
        text: ('Alguém escreveu um Coment no site Esmiuçado, na pagina: '+ data),
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
          

    
