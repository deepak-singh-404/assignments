require("dotenv").config();
// const connectToDatabse  = require('./db')
const {addFile} = require('./controllers')


module.exports.add_file = async (event) => {
    try {
        // await connectToDatabse() 
        let result = await addFile(event.body);
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
              },
            body: JSON.stringify(result),
        };
    }
    catch(error){
        return {
            statusCode:500,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
              },
            body: JSON.stringify(error)
        }
    }
}