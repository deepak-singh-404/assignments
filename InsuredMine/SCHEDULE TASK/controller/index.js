//Models
const FirstCollection = require('../model/firstCollection')
const SecondCollection = require('../model/secondCollection')


const schedule = require('node-schedule');

const scheduleTask = async (req, res) => {
    try {
        let { timestamp, message } = req.body
        
        //Validate required fields
        if (!timestamp || !message) {
            return res.status(403).json({ message: "Fields are empty", success: false })
        }

        timestamp = new Date(timestamp)

        //CHECK DATA DUPLICATION
        const isAlreadyExist = await FirstCollection.findOne({ $and: [{ timestamp }, { message }] })
        if (isAlreadyExist) {
            return res.status(409).json({ message: "We have already scheduled your task", success: false })
        }

        //CREATE NEW DATA
        const newTaskToSchedule = await new FirstCollection({
            timestamp,
            message
        })
        await newTaskToSchedule.save()

        //SCHEDULE JOB
        const job = schedule.scheduleJob(timestamp, async () => {
            
            const dataToSave = await FirstCollection.findById(newTaskToSchedule._id)
            if (dataToSave) {
                //CHECK DATA DUPLICATION
                const isAlreadyAdded = await SecondCollection.findById(newTaskToSchedule._id)
                if (!isAlreadyAdded) {

                    //COPY DATA TO COLLECTION2
                    const newData = await new SecondCollection({
                        timestamp: newTaskToSchedule.timestamp,
                        message: newTaskToSchedule.message
                    })
                    await newData.save()
                    
                    //DELETE DATA FROM FIRST COLLECTION
                    await FirstCollection.findByIdAndRemove(newTaskToSchedule._id)
                }
            }
        })
        
        return res.status(200).json({ success: true, message: "Your task has been scheduled", response: newTaskToSchedule })
    }
    catch (error) {
        return res.status(200).json({ message: error.message, success: false })
    }
}

module.exports = {
    scheduleTask
}