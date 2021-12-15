const mongoose = require('mongoose')
const { Schema } = mongoose


const productSchema = new Schema({
    productName: {
        type: String,
        required: true,
    },
    status:{
        type: String,
        required:true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model('product', productSchema)