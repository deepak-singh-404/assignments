const axios = require('axios')
exports.sendMail = async function(body){
    return new Promise( async function(resolve, reject){
        try{
            const {data} = await axios({
                url:" https://bija9tkej9.execute-api.us-east-1.amazonaws.com/dev/send-mail",
                method: "Post",
                data: body
            })
            resolve({success: true, response: data})
        }
        catch(err){
            reject({success: false, response: err})
        }
    })
}