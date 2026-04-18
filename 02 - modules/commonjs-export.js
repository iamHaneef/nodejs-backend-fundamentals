console.log("single import from module.exports ");

/*
const facts = require("./exportslearn");

console.log(facts(6));
*/

console.log("multiple imports  ");

// old method

/*
const math = require("./exportslearn");

console.log(math.fact(6));

console.log(math.add(4,7));

console.log(math.sub(5,2));

console.log(math.radius);

*/

//modern method

const {fact , add , sub , radius , cuboid , value} = require("./exportslearn");

console.log(fact(6));

console.log(add(4,7));

console.log(sub(5,2));

console.log(radius);

console.log(cuboid(2,3,4));

console.log(value);
