const mongoose = require('mongoose')
const { Schema } = mongoose


const customerSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required:true
    },
    mobileNumber:{
        type: Number,
        required:true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model('customer', customerSchema)