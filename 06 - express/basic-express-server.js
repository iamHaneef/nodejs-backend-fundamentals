const express = require("express");

const app = express();

app.use(express.json());

app.use((req,res,next)=>{
    console.log("middleware 1");
    next();
});

app.use((req,res,next)=>{
    console.log("middleware 2");
    next();
});


//Get

app.get("/" , (req,res)=>{
    
    console.log("GET");
    res.end("get method");
})

//POST 

app.post("/:id" , (req,res)=>{
    console.log("datas : " , req.body);
    console.log("ID : " , req.params.id);
    console.log("HEADERS : " , req.headers);
    res.json({
        email: "haneeffury@gmail.com",
        pass: "12345"
    });
    console.log("POST");
});

//PUT

app.put("/" , (req,res)=>{
    res.json({
        email: "haneeffury@gmail.com",
        pass: "12345"
    });
    console.log("PUT");
});

//DELETE

app.delete("/" , (req,res)=>{
    res.json({
        email: "haneeffury@gmail.com",
        pass: "12345"
    });
    console.log("DELETE");
});


//server listen
app.listen(3000 , ()=>{
    console.log("Port running on 3000")
})