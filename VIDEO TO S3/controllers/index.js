const {upload, s3,getSignedUrl,deleteFileFromS3} = require('../utils/s3')
const { v4: uuidv4 } = require('uuid')

module.exports = {
    addFile: async function(reqBody){
        return new Promise(async function(resolve, reject){
            try{
                console.log(reqBody.toString('base64'))
                // upload.single('file', reqBody)
                // console.log("req.body", reqBody)
                return resolve({success: true,statusCode:200, message:"File added successfully", response: {}})
            }
            catch(error){
                return reject({error:error, success: false, statusCode: 500, message: "Internal Server Error"})
            }
        })
    }
}