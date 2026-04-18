/*
console.log("Node.js run in Backend");


console.log("Nodejs access the system");

const os = require("os"); // import something

console.log(os.platform());
console.log(os.freemem());
console.log(os.totalmem());
console.log(os.homedir());
*/

console.log(`read , write files `);


// sync manner

const fs = require("fs");

// write the next file name check.txt

fs.writeFileSync("check.txt" , "We writing something to check write file oprairon");

// read the file name check.txt

const data = fs.readFileSync("check.txt" , "utf8");
console.log(data);


// async manner

//write file 

fs.writeFile("async.txt" , "we are checking async write file opratiions" , (err)=>{
    if(err){
        console.log("error");
    }
    else{
        console.log("data written");
    }
} );

// read file 

fs.readFile("async.txt" , "utf8"  , (err , data)=>{
    if(err){
        console.log("error : " , err);
    }
    else{
        console.log("data readed : " , data);
    }
});






