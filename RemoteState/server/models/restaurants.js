const mongoose = require('mongoose')
const { Schema } = mongoose

const restaurantSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    owner: {
        type: Schmea.Types.ObjectId,
        ref: 'user'
    },
    location: {
        type: {
            type: String,
            enum: ['Point']
        },
        coordinates: {
            type: [Number],
            index: '2dsphere'
        },
        formattedAddress: {
            type: String
        },
        zipcode: {
            type: Number
        },
        city: {
            type: String
        },
        stateCode: {
            type: String
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, { strict: false })

module.exports = mongoose.model('restaurant', restaurantSchema)