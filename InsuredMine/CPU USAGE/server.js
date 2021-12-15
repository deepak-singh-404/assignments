const os = require('os-utils');
const express = require('express')
const { spawn } = require('child_process');
const app = express()

os.cpuUsage(function (v) {
    if (v * 100 > 10) {
        const newProcessInstance = spawn(process.argv[0], process.argv.slice(1), {
            detached: true
            // stdio: 'ignore', // not sure if this is needed
        });
    }
});

app.listen(3000, () => {
    console.log("server started")
})


// setInterval(() => {
//     os.cpuUsage(function(v){
//         console.log( 'CPU Usage (%): ' + v * 100 );
//     });
// }, 1000);
