const mongoose = require('mongoose')
const { Schema } = mongoose

const documentModel = new Schema({}, { strict: false })

module.exports = mongoose.model('document', documentModel)
