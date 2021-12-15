const mongoose = require('mongoose')
const { Schema } = mongoose


const agentScehma = new Schema({
},{strict:false})


module.exports = mongoose.model('agent', agentScehma)
