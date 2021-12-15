const mongoose = require('mongoose')
const { Schema } = mongoose


const secondCollectionSchema = new Schema({
    timestamp: {
        type: Date,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
},
    // { strict: false }
)


module.exports = mongoose.model('secondCollection', secondCollectionSchema)