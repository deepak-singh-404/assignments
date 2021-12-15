const { ObjectId } = require('mongodb')
const Customer = require('../models/customer')
const Product = require('../models/product')
const CustomerProductMapping = require('../models/customerProductMapping')

//name, email, mobileNumber
const addCustomer = async (req, res, next) => {
    try {
        const { name, email, mobileNumber } = req.body
        const customer = await Customer.findOne({ email })
        if (customer) {
            return res.status(409).json({ success: false, response: {}, message: "Customer with given email already added" })
        }
        const newCustomer = await new Customer({
            name,
            email,
            mobileNumber
        })
        await newCustomer.save()
        return res.status(201).json({ success: true, message: "New customer added successfully", response: newCustomer })
    }
    catch (error) {
        return res.status(500).json({ success: false, message: "Internal Server Error", error: error.message })
    }
}

// prodcut_name, status,
const addProduct = async (req, res, next) => {
    try {
        const { productName, status } = req.body
        const product = await Product.findOne({ $and: [{ productName }, { status }] })
        if (product) {
            return res.status(409).json({ success: false, response: {}, message: "Product with given name and status has been already added" })
        }
        const newProduct = await new Product({
            productName,
            status
        })
        await newProduct.save()
        return res.status(201).json({ success: false, message: "New Product added successfully", response: newProduct })
    }
    catch (error) {
        return res.status(500).json({ success: false, message: "Internal Server Error", error: error.message })
    }
}

const likeProduct = async (req, res, next) => {
    try {
        const { customerId, productId } = req.params
        const isAlreadyLiked = await CustomerProductMapping.findOne({
            $and:
                [{ customerId: ObjectId(customerId) },
                { productId: ObjectId(productId) }]
        })
        if (isAlreadyLiked) {
            //unlike product
            await CustomerProductMapping.findByIdAndRemove(isAlreadyLiked._id)
            return res.status(200).json({ success: true, message: "Product unliked successfully" })
        }
        // Like product by making inserting new document
        const newCustomerProductMapping = await new CustomerProductMapping({
            customerId: ObjectId(customerId),
            productId: ObjectId(productId)
        })
        await newCustomerProductMapping.save()
        return res.status(200).json({ success: true, message: "Product liked successfully", response: newCustomerProductMapping })
    }
    catch (error) {
        return res.status(500).json({ success: false, message: "Internal Server Error", error: error.message })
    }
}

const getProducts = async (req, res, next) => {
    try {

        let productId = req.query.productId
        productId = JSON.parse(productId)
        for (var i = 0; i < productId.length; i++) {
            productId[i] = ObjectId(productId[i])
        }
        const products = await CustomerProductMapping.aggregate([
            {
                "$match": {
                    "productId": { "$in": productId }
                }
            },
            {
                "$group": {
                    "_id": "$productId",
                    "productId": {"$first":"$productId"},
                    "customerId": {"$push":"$customerId"}
                }
            },
            {
                "$lookup": {
                    "from": "products",
                    "localField": "productId",
                    "foreignField": "_id",
                    "as": "productId"
                }
            },
            {
                "$lookup": {
                    "from": "customers",
                    "localField": "customerId",
                    "foreignField": "_id",
                    "as": "customerId"
                }
            },
            { "$unwind": { "path": "$productId" } },
            { "$project": { "_id": 0,"product":"$productId", "customer":"$customerId"} }
        ])


        return res.status(200).json({ success: true, response: "Product fetched successfully", response: products })
    }
    catch (error) {
        return res.status(500).json({ success: false, message: "Internal Server Error", error: error.message })
    }
}

module.exports = {
    addCustomer,
    addProduct,
    likeProduct,
    getProducts
}