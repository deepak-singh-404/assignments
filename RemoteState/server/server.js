const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config()
const cors = require('cors')
const morgan = require('morgan')

//MIDDILWARES
const app = express();
app.use(express.json());
app.use(cors())

// Routes
const {routes, router} = require('./routes')

app.use(morgan('dev'))

//ROUTES
app.use('/dev/api/v1', router)
routes['base_endpoint'] = '/dev/api/v1'

let _response = {}

mongoose.connect(process.env.MONGO_URL.replace("<password>", process.env.MONGO_PASSWORD)
    , { useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
        _response.database = "Healthy"
        console.log("Database connected")
    }).catch((err) => {
        _response.database = "Unhealthy"
        console.log("Error in connecting to DataBase", err.message)
    })

_response.server = "Healthy"

app.use('/',(req,res)=>{
    res.status(200).json(_response)
})

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

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log("Server started")
    routes['port'] = PORT
    console.log(routes)
})

