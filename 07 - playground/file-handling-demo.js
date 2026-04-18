// file handling

//write sync
const fs = require("fs");


//fs.writeFileSync("file1.txt" , "This is first msg");

//read sync
// const read1 =  fs.readFileSync("file1.txt" , "utf-8");
// console.log(read1);

//write / read async

// fs.writeFile("file2.txt" , "this is the second file msg" , (err)=>{
//     if(err)
//     {
//         console.log("error");
//     }
//     else{
//         console.log("perfect");
//     }
// } )

// fs.readFile("file2.txt" , "utf-8" , (err,data)=>{
//     if(err)
//     {
//         console.log("error : " , err);
//     }
//     else{
//         console.log("data : " ,data);
//     }
// })

// append

// fs.appendFile("file2.txt" , " this is the append file also" , (err)=>{
//     if(err)
//     {
//         console.log("error");
//     }
//     else{
//         console.log("perfect");
//     }
// } )

// fs.readFile("file2.txt" , "utf-8" , (err,data)=>{
//     if(err)
//     {
//         console.log("error : " , err);
//     }
//     else{
//         console.log("data : " ,data);
//     }
// })

//fs.unlinkSync("file3.txt");

const file = fs.existsSync("file2.txt");

if(file){
    console.log("file found");
}
else{
    console.log("not found");
}

// create streams

const readStream = fs.createReadStream("file2.txt" , "utf-8");

readStream.on("data" , (chunks)=>{
    console.log(chunks);
})

readStream.on("end" , ()=>{
    console.log("it end")
})

// pipe streams

const reads = fs.createReadStream("input.txt" , "utf-8");
const writes = fs.createWriteStream("output.txt");

reads.pipe(writes);


