const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config()

//MIDDILWARES
const app = express();
app.use(express.json({limit: '100mb'}))

// Routes
const router = require('./routes')

//ROUTES
app.use('/', router)


const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URL.replace("<password>", process.env.MONGO_PASSWORD)
    , { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }).then(() => {
        console.log("Database connected")
    }).catch((err) => {
        console.log("Error in connecting to DataBase", err.message)
    })

// process.env.MONGO_URL.replace("<password>", process.env.MONGO_PASSWORD
// "mongodb://127.0.0.1:27017/frontEndProject"
app.listen(PORT,()=>{
    console.log("Server started on PORT", PORT)
})

