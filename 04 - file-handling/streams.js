//streams

const fs = require("fs");

// const readStream = fs.createReadStream("check.txt","utf8");

// readStream.on("data" ,(pieces)=>{
//     console.log("Split it small parts");
//     console.log(pieces);
// });

// readStream.on("end",()=>{
//     console.log("Ended");
// })

// pipe streams

const readStream = fs.createReadStream("input.txt","utf8");

const writeStream = fs.createWriteStream("allah.txt");

readStream.pipe(writeStream);

