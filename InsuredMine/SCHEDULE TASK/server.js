const express = require('express');
const mongoose = require('mongoose')
const {scheduleTask} = require('./controller')

const dotenv = require('dotenv');
dotenv.config()


//MIDDILEWARES
const app = express()
app.use(express.json())

app.get('/', (req, res)=>{
    return res.status(200).json({message: "All Good"})
})

app.post('/scheduleTask', scheduleTask)

//Catching 404 Error
app.use((req, res, next) => {
    const error = new Error('INVALID ROUTE')
    error.status = 404
    next(error);
})

//Error handler function
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})

const PORT = process.env.PORT || 4000;

const now = new Date(Date.now() + (1 * 60 * 1000));
console.log(now)


mongoose.connect("mongodb://127.0.0.1:27017/insuredmine"
    , { useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
        console.log("server Started", PORT)
        app.listen(PORT)
    }).catch((err) => {
        console.log("Error in connecting to DataBase", err.message)
    })


// "start": "pm2-runtime start ecosystem.config.js --env production"
