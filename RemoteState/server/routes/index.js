const express = require('express')
const router = express.Router()

const {userRegister, userLogin} = require('../controllers/user')

const routes = {}
//USER REGISTER
router.post('/register', userRegister)
routes["customer_register"] = "/register"

//USER LOGIN
router.post('/login', userLogin)
routes["customer_login"] = "/login"


module.exports = {router, routes}