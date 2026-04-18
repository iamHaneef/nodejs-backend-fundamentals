// Event Loops 
console.log("Start");

//async - wait

setTimeout(()=>{
    console.log("Run after 0.5s - first-macrotask queue");

    setTimeout(()=>{
        console.log("Run after 1s - second-macrotask queue");

        setTimeout(()=>{
            console.log("Run after 1.5s - third-macrotask queue");
        },1500)

    },1000);

},500);

//files handling

const fs = require("fs");

fs.writeFile("async.txt" , "newthings" , (err)=>{
    if(err)
    {
        console.log(err);
    }
    else{
         console.log("Writted done");
    }
});

fs.readFile("async.txt" , "utf8" , (err,data)=>{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log("Readed done : " , data);
    }
})

//promises

const mypromises = new Promise((resolve , reject)=>{
    let check = true;

    if(check){
        resolve("True");
    }
    else{
        resolve("False");
    }
})
.then((data) => console.log("Promise-1-microtask queue"))
.catch((err) => console.log("error"));

Promise.resolve().then((data) => console.log("promises-2-microtask queue"))
.catch((err) => console.log("error"));


console.log("end");
// setTimeout(()=>{
//     console.log("Run after 0.5s - first");
// },500);

// setTimeout(()=>{
//         console.log("Run after 1s - third");
//     },1500);

// setTimeout(()=>{
//             console.log("Run after 1.5s - second");
// },1000)

// aync file



// sync

/*
fs.writeFileSync("async.txt" , "Again");

const data = fs.readFileSync("async.txt" , "utf8");
console.log(data);

*/