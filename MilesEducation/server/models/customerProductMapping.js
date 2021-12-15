const mongoose = require('mongoose')
const { Schema } = mongoose


const customerProductMapSchema = new Schema({
    productId: {
        type: Schema.Types.ObjectId,
        ref:'product',
        required: true,
    },
    customerId:{
        type: Schema.Types.ObjectId,
        ref:'customer',
        required:true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model('customerProductMapping', customerProductMapSchema)