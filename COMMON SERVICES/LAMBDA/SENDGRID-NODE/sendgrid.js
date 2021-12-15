require("dotenv").config();

const sgMail = require('@sendgrid/mail')

exports.sendMail = async function(data){
    return new Promise( async function(resolve, reject){
        try{
            const API_KEY = process.env.API_KEY
            const SENDER_MAIL = process.env.SENDER_MAIL
            sgMail.setApiKey(API_KEY)
            const message = {
                to: data.recieverMail,
                from: SENDER_MAIL,
                subject: data.subject,
                html: data.html
            }
            await sgMail.send(message)
            resolve('Mail has been sent successfully')
        }
        catch(err){
            reject(err)
        }
    })
}