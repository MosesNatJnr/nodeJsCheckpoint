const fs = require('fs');

let txtIn = fs.readFileSync('./hello.txt','utf-8');

console.log(txtIn);

// fs.readFile('hello.txt',function (err,data) {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(data.toString());
// })
fs.writeFileSync('./welcome.txt','hello node');