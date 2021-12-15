const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
    /*
    ROLE:Number
    0=> USER
    1=> SUB-ADMIN
    2=> ADMIN
    */
    role: [{
        type: Number,
        required: true,
        default: 0
    }],
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    address: [{
        type: {
            type: String,
            enum: ['Point']
        },
        coordinates: {
            type: [Number],
            index: '2dsphere'
        },
        addressType: {
            type: String,
            required: true,
            default: "Home"
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
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
}, { strict: false })

module.exports = mongoose.model('user', userSchema)