const fs = require("fs");

// read-write sync file

fs.writeFileSync("check.txt","poda dei")

const data = fs.readFileSync("check.txt","utf8")
console.log(data);

// read-write async file

fs.writeFile("async.txt","vaada dei",(err)=>{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log("Written successfully");
    }
});

fs.readFile("async.txt","utf8",(err,data)=>{
    if(err)
    {
        console.log("error : " , err);
    }
    else{
        console.log("data : " , data);
    }
})


// append a new text in existing file

fs.appendFileSync("check.txt" , "Appending Text");

fs.appendFile("check.txt" , " Second Appending Text",(err)=>{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log("Written successfully");
    }
});

//delete a file

//fs.unlinkSync("file.txt");

// fs.unlink("file.txt", (err) =>
//     {
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Written successfully");
//     }
// });

//rename a file

// fs.rename("haneef.txt" , "allah.txt" , (err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Written successfully");
//     }
// });


//exists a file check

if(fs.existsSync("check.txt"))
{
    console.log("exists");
}
else{
    console.log("not exists");
}



