//basic test
console.log("This is Nodejs Test");

//os handling

const os = require("os");
console.log(os.platform());
console.log(os.freemem());
console.log(os.totalmem());
console.log(os.hostname());

function add(a,b)
{
    return a+b;
}

function sub(a,b)
{
    return a-b;
}

function mul(a,b)
{
    return a*b;
}

const value = 100;

//http server creation

const http = require("http");

const server = http.createServer((req,res)=>{
    res.end("It created the http server");
})

module.exports = {
    add , sub , mul , value
};

server.listen(8000 , ()=>{
    console.log("it created the server");
});