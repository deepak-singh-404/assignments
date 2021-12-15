var express = require('express');
var app = express();
var multer = require('multer');
const csv = require('csvtojson')
var fs = require('fs');
const path = require("path");
const mongoose = require('mongoose')
const AgentModel = require('./models/agent')
const UserModel = require('./models/user');

var storage = multer.diskStorage({ //multers disk storage settings
    destination: function (req, file, cb) {
        cb(null, './tmp/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});

var upload = multer({
    storage: storage
}).single('file');


app.post('/upload', async (req, res) => {
    let fileName = ""
    // const path = __dirname + '/uploads/' + fileName
    // console.log("path", path)
    upload(req, res, async (err) => {
        if (err) {
            return res.status(400).send("Something went wrong!")
        }
        const fileName = req.file.originalname
        const _path = path.resolve(__dirname + "/tmp/" + fileName)
        let data = []
        await csv().fromFile(_path).then((jsonArrayObj) => {
            data.push(jsonArrayObj)
        })
        let d = data[0]

        // return res.status(200).json({success:false, data:d, count: d.length})
        let agent = []
        let users = []
        let usersAccount = []
        let lob = []
        let carrier = []
        let Policy = []

        for (var i = 0; i < d.length; i++) {
            agent.push({
                agent: d[i].agent
            })
            users.push({
                firstname: d[i].firstname,
                dob: d[i].dob,
                address: d[i].address,
                phone: d[i].phone,
                state: d[i].state,
                zip: d[i].zip,
                email: d[i].email,
                gender: d[i].gender,
                userType: d[i].userType
            })
            usersAccount.push({
                account_name: d[i].account_name
            })
            carrier.push({
                company_name: d[i].company_name
            })
        }

        //Insert data in mongodb
        let filteredAgent = [...new Set(agent.map(JSON.stringify))].map(JSON.parse);
        filteredAgent.forEach(async(b)=>{
            let isExist = await AgentModel.findOne({agent:b.agent})
            if (isExist){
                isExist = isExist.toJSON()
                const filtersUser = d.filter(o => o.agent == isExist.agent)
                if (filtersUser.length !== 0){
                    filtersUser.map(o => o['agent'] = isExist._id)
                    await UserModel.insertMany(filtersUser)
                }
            }
            else{
                let newAgent = await new AgentModel({
                    agent:b.agent
                })
                await newAgent.save()
                newAgent = newAgent.toJSON()
                const filtersUser = d.filter(o => o.agent == newAgent.agent)
                if (filtersUser.length !== 0){
                    filtersUser.map(o => o['agent'] = newAgent._id)
                    await UserModel.insertMany(filtersUser)
                }
            }
        })
        fs.stat(_path, function (err, stats) {
            console.log(stats);//here we got all information of file in stats variable
            if (err) {
                return console.error(err);
            }
            fs.unlink(_path, function (err) {
                if (err) return console.log(err);
                console.log('file deleted successfully');
            });
        });
        return res.status(200).json({
            success: true, count: data[0].length, response: {agent, users, usersAccount, carrier}
        })
    })




    // filePath = path.resolve("/tmp/" + attach_fileName)




    // let data = []
    // await csv().fromFile('.').then((jsonArrayObj)=>{
    //     data.push(jsonArrayObj)
    // })

    // fs.stat(path, function (err, stats) {
    //     console.log(stats);//here we got all information of file in stats variable
    //     if (err) {
    //         return console.error(err);
    //     }

    //     fs.unlink(path, function (err) {
    //         if (err) return console.log(err);
    //         console.log('file deleted successfully');
    //     });
    // });
    // return res.send("Ok working")
    // return res.status(200).json({ success: true, response: data, count: data[0].length })
})

app.get('/agent/:id', async(req,res,next)=>{
    try{
        const {id} = req.params
        let agent = await AgentModel.findById(id)
        if (agent){
            agent = agent.toJSON()
            let users = await UserModel.find({agent:agent._id})
            users.map(d=>d.toJSON())
            agent.totalUsers = users.length
            agent.users = users
            return res.status(200).json({success:true, response:agent})
        }
    }
    catch(error){
        return res.status(500).json({success:false, response: error.message})
    }
})


// app.listen('3000', function () {
//     console.log('running on 3000...');
// });

const PORT = process.env.PORT || 3000
mongoose
    .connect("mongodb://127.0.0.1:27017/insuredmine", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("server Started");
        app.listen(PORT);
    })
    .catch((err) => {
        console.log("Error in connecting to DataBase", err.message);
    });