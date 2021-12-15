const { ObjectId } = require('mongodb')
const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

//Config
const key = require('../config/keys')

//name, email, role, location
const userRegister = async (req, res, next) => {
    try {
        const { name, email, role, password } = req.body
        const user = await User.findOne({ email })
        if (user) {
            return res.status(409).json({ success: false, response: {}, message: "User with given email already exist" })
        }
        let hashedPassword = await bcrypt.hash(password, 8)
        const newUser = await new User({
            name,
            email,
            password: hashedPassword,
            role: [role],
        })
        await newUser.save()
        return res.status(201).json({
            success: true, message: "New user added successfully", response: {
                _id: newUser._id,
                name: newUser.name,
                role: newUser.role,
                address: newUser.address
            }
        })
    }
    catch (error) {
        return res.status(500).json({ success: false, message: "Internal Server Error", error: error.message })
    }
}

const userLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found with given email" })
        }
        const isCorrect = await bcrypt.compare(password, user.password)
        if (!isCorrect) {
            return res.status(401).json({ success: false, message: "Invalid Credential" })
        }
        const payload = {
            _id: user._id
        }
        const token = await jwt.sign(payload, key.secretKey, { expiresIn: 7200 })
        return res.status(200).json({ success: true, message: "User logged in successfully", token: 'Bearer ' + token })
    }
    catch (err) {
        return res.status(400).json({ message: `Error in userLogin ${err.message}` })
    }
}

//ADD SUBADMIN
const addSubAdmin = async (req, res, next) => {
    try {
        const { name, email } = req.body
        const subAdmin = await User.findOne({
            "$and":
                [{ email: email },
                { role: { "$in": [1] } }
                ]
        })
        if (subAdmin) {
            return res.status(409).json({ success: false, message: "Sub Admin already added" })
        }
        const newSubAdmin = await new User({
            name,
            email,
            role: [1]
        })
        await newSubAdmin.save()
        return res.status(201).json({success:true, message:"Sub Admin added successfully", response: newSubAdmin})
    }
    catch (error) {

    }
}

module.exports = {
    userRegister,
    userLogin
}