const express = require('express')
const router = express.Router()


//__________________ADMIN_________________________

const {addCustomer, addProduct, likeProduct, getProducts} = require('../controllers')


//ADD CUSTOMER
router.post('/customer', addCustomer)

//ADD PRODUCT
router.post('/product', addProduct)

//LIKE PRODUCT
router.get('/product/:productId/:customerId', likeProduct)

//GET PRODUCTS
router.get('/product', getProducts)


module.exports = router