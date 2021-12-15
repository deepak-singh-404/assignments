const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
    agent: {
        type: Schema.Types.ObjectId,
        ref: 'agent'
    }
},{strict:false})


module.exports = mongoose.model('user', userSchema)
