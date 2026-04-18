const {add , sub , mul , value}=require("./test1");

console.log(add(2,3));
console.log(sub(2,3));
console.log(mul(2,3));
console.log(value);

const path = require("path");
console.log(path.basename(__filename));
console.log(path.basename(__dirname));