const { ObjectId } = require('mongodb')
const Restaurant = require('../models/restaurants')

const addRestaurant = async(req, res, next)=>{
    try{
        const {_id, role} = req.user
        const {name, owner} = req.body
    }
    catch(error){

    }
}
