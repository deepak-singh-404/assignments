const sendgrid = require('./sendgrid');

module.exports.send_mail = async (event) => {
    try {
        let _data = JSON.parse(event["body"])
        console.log("data",_data)
        if (_data.type === "email"){
            let result = await sendgrid.sendMail(_data.data);
            console.log("result", result)
            let respone = {
                'status': 'success',
                'code': 200,
                'result': result
            }
            return {
                statusCode: 200,
                body: JSON.stringify(respone),
            };
        }
       
    } catch(error) {
        if (error instanceof TypeError) {
           return {
                statusCode: error.statusCode,
                body: JSON.stringify(
                    {
                        message: error.message,
                    }
                ),
            };
        } else if (error instanceof Error) {
            return {
                statusCode: 400,
                body: JSON.stringify(
                    {
                        message: error.message,
                    }
                ),
            };
        } else {
            return {
                statusCode: 400,
                body: JSON.stringify(
                    {
                        message: error.message,
                    }
                ),
            };
        }
    }
};
