const mongoose = require('mongoose')
const { Schema } = mongoose

const dishSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    ingredients: [{
        type: String
    }],
    createdBy: {
        type: Schmea.Types.ObjectId,
        ref: 'user'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, { strict: false })

module.exports = mongoose.model('dish', dishSchema)