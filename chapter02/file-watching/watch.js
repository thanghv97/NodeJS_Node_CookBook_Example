const fs = require('fs');
const path = require('path');
const moment = require('moment');

const file = "./file.txt";
const filepath = path.join(process.cwd(), file);
const optionsWatchFile = {
    // bigint: This defaults to false; when set to true,
    // the numeric values returned from the object of Stats would be specified as BigInt. 
    // BigInt is a JavaScript object that allows you to represent larger numbers more reliably.
    bigint: true,

    // persistent: This value indicates whether the Node.js process 
    // should continue to run while files are still being watched. It defaults to true
    persistent: true,

    // interval: The interval value controls how often the file should be polled for changes, 
    // measured in milliseconds. The default value is 5,007 milliseconds when no interval is supplied.
    interval: 5,
}

const optionWatch = {
    // persistent: The persistent option is a Boolean that indicates whether the Node.js 
    // process should continue to run while files are still being watched. By default, the persistent option is set to true.
    persistent: true,
    
    // recursive: The recursive option is another Boolean that allows the user to specify 
    // whether changes in subdirectories should be watched – by default, this value is set to false. 
    // The recursive option is only supported on macOS and Windows operating systems.
    recursive: false,

    // encoding: The encoding option is used to specify which character encoding should be 
    // used for the filename specified—the default is utf8.
    encoding: "utf8",
}


// fs.watchFile(file, optionsWatchFile, (current, previous) => {
//     const time = moment().format("MMMM Do YYYY, h:mm:ss a")
//     console.log(fs.statSync(filepath));
//     return console.log(`watch-file: ${file} updated ${time}`)
// })

fs.watch(process.cwd(), optionWatch, (eventType, filename) => {
    const time = moment().format("MMMM Do YYYY, h:mm:ss a")
    return console.log(`watch: ${filename} updated ${time} with event ${eventType}`)
})