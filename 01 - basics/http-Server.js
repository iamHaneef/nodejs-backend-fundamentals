//create a http server in node

const http = require("http");


//created 

const server = http.createServer((req , res) => {

    let success = true;

    if(success){
        res.end("Server is created in nodejs");
    }
    else{
        res.end("Server is not created");
    }

    
})

//connect the server with local host

server.listen(8000 , ()=>{
    console.log("Server running on localhost 8000");
});
