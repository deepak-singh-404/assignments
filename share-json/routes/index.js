const express = require('express')
const router = express.Router()


const { addData, getData } = require('../controllers')

router.post('/', addData)

router.get('/:id', getData)

module.exports = router
