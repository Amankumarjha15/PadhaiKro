const nodemailer = require("nodemailer");

const mailSender = async (email , title , body) => {
    try{
       let transporter = nodemailer.createTransport({
        host:process.env.MAIL_HOST,
        auth:{
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
        }
       })

       let info = transporter.sendMail({
        from:'StudyNotion-Team',
        to:`${email}`,
        subject:`${title}`,
        html:`${body}`
       })
       
       console.log("Info --" , info)
       return info;
    }
    catch(error){
       console.log("Eroor Occured in sending mail via mailsender",error.message)
    }
}



module.exports = mailSender;