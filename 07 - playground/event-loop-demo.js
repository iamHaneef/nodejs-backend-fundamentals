console.log("event_loops");

setTimeout((req,res)=>{
    console.log("1st timeout")

    setTimeout((req,res)=>{
    console.log("2st timeout")

        setTimeout((req,res)=>{
        console.log("3st timeout")
}, 1500);

}, 1000);

}, 500);

const mypromises = new Promise((resolve , reject) =>{

    let val = true ;

    if(val){
        resolve("Promises Resolved");
    }
    else{
        reject("Promises Reject");
    }
})
.then((data) => console.log("data get : " +data))
.catch((err) => console.log("error get : " +err));

const mypromises2 = new Promise((resolve , reject) =>{

    let val = false ;

    if(val){
        resolve("Promises Resolved");
    }
    else{
        reject("Promises Reject");
    }
})
.then((data) => console.log("data get : " +data))
.catch((err) => console.log("error get : " +err));


console.log("end")