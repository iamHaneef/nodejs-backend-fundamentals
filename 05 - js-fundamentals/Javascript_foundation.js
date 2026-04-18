console.log("Variables");

/* 

let a = 10+10;
a = 30
console.log(a)

let b = "haneef";
console.log(b);

let c = "bicycle";
console.log("The transport is " + c)

let d = 12;
console.log("The number is " + d);

console.log(a+a+a);

var e = 150 + 150;
console.log(e)

const f = 50;
//f = 12;
console.log(f);

*/

console.log("Input from Users");

/*
let a = prompt("What is your name ");
console.log(a + " J");

let b = Number(prompt("What is your Rollno "));
console.log(b + 10);

let c = prompt("What is your age ");
console.log(Number(c) + 100);

*/

console.log("String and Template Literals");

/*
let str1 = "Umbrella";
let str2 = "minon";

console.log(str1 + " is " + str2);

console.log(`${str1} is are the ${str2}`);

console.log(str1[Math.floor(Math.random()*5)]);
*/

console.log("Array function");


/*
let a = ["1" , 2,3 ,4 ,[6,7,8]];
let b = [[1,2],[3,4]];

console.log(a.push(9));
console.log(a)

console.log(a.pop())
console.log(a)

console.log(a.shift())
console.log(a)

console.log(a.unshift(1))
console.log(a)

console.log(a.reverse())

console.log(a.reverse())

console.log(a.slice(1,4))
console.log(a.slice(2,5))
console.log(a.slice(3,6))

console.log(a)
console.log(a.splice(1,1))

console.log(a)

console.log(a.splice(1,0,2))
console.log(a)

console.log(a.splice(1,2,'x','y'))
console.log(a)

console.log(a.join())
console.log(a.length)

console.log(a.concat(b));

let str = "hi , i'm , the , kungfu , panda";
console.log(str.split(","));

*/


console.log("if conditions");

/*
let a = 5 ;
let b = 10 ;
let c = 15 ;

if(a > b && a > c)
{
    console.log("The Answer is a and value of a is " + a);
}
else if(b > a && b > c)
{
    console.log("The Answer is b and value of b is " + b);
}
else
{
    console.log("The Answer is c and value of c is " + c);
}

*/


console.log("Objects");

/*
let items = {

    name : "panda",
    age : 10 ,
    power : "Kungfu" ,
    friends : ["monkey" , "Tigress" , "mantis"],
    address : {
        doorno : 10 ,
        street : "newyork",
        call : function add(a,b) {
            return a+b;
        }
    }

}

console.log(items.name)
console.log(items.power)

console.log(items.friends)
console.log(items.friends[1])

console.log(items.friends.push("swan"))
console.log(items.friends)

console.log(items.address.street)

console.log(items.address.call(5,4))

console.log(items.address.call())

*/



console.log("loops");


/*
for(let i=1 ; i<=5 ; i++)
{
    console.log(i);
}


let i=1;
while(i<=5)
{
    console.log(i);
    i++;
}


let j=1;
do{
   console.log(j);
   j++;
}while(j<=5);



console.log("for ..... of ")

let fruits = ["apple" , "mango"];

fruits.push("banana")

console.log(fruits)

for(let key of fruits)
{
    console.log(key);
}

console.log("for......in")

let items = {

    name : "panda",
    age : 10 ,
    power : "Kungfu" ,
    friends : ["monkey" , "Tigress" , "mantis"],
    address : {
        doorno : 10 ,
        street : "newyork",
        call : function add(a,b) {
            return a+b;
        }
    }

}

for(let key in items)
{
    console.log(items[key])
}

// console.log("for...each")


let fruit = ["apple" , "mango" , "goa"];

fruit.forEach(function(value){
    console.log(value);
})

let items1 = {

    name : "panda",
    age : 10 ,
    power : "Kungfu" ,
    friends : ["monkey" , "Tigress" , "mantis"],
    address : {
        doorno : 10 ,
        street : "newyork",
        call : function add(a,b) {
            return a+b;
        }
    }

}

Object.values(items1).forEach(function(key)
{
    console.log(key);
})

*/



console.log("functions")

/*

function add(a,b)
{
    return a+b;
}

console.log(add(3,5))


console.log((function(a,b)
{
    return a+b;
})(4,5))


function fact(n)
{
    if(n == 0)
    {
        return 1;
    }

    return n* fact(n-1);

}
console.log(fact(5))


function fibo(n)
{
    if(n == 0 || n==1)
    {
        return n;
    }

    return fibo(n-1) + fibo(n-2) ;

}

for(let i=0 ; i<10 ; i++)
{
    console.log(fibo(i))
}

console.log("cube")
function cube(l,b,h)
{
    return l*b*h;
}

console.log(cube(2,3,4));

let cuboid = function(l,b,h)
{
    return l*b*h;
}

console.log(cuboid(2,3,4));

let cuboid2 = (l,b,h) =>
{
    return l*b*h;
}

console.log(cuboid2(2,3,4));


let arr = [1,22,45];

function check(array)
{
    for(let key of array)
    {
        console.log(key)
    }
}

console.log(check(arr));


function new2()
{
    let ans = 1;
    for(let i=0 ; i<arguments.length ; i++)
    {
        ans = ans * arguments[i];
    }
    return ans;
}
console.log(new2(2,3,2,2))


*/


console.log("equality");

/*
let a = 10;
let b = "10";

if(a == b)
{
    console.log("Worked");
}
else{
    console.log("Not Worked");
}


let c = 10;
let d = "10";

if(c === d)
{
    console.log("Worked");
}
else{
    console.log("Not Worked");
}*/


console.log("callback function")


// let num = [1,2,3,4,5];

// function work()
// {
//     console.log("Last try");
// }

// num.forEach(work);



console.log('Add event Listener');

// const button = document.getElementById('button');

// button.addEventListener('click' , function()
// {
//     console.log("worked");
//     alert("done");
    
// })


console.log("Higher Order function");

// function first(swap)
// {
//     console.log("first");
//         swap()
// }

// first(second);

// function second()
// {
//     console.log("second");
// }


// function createadder(number)
// {
//     return function(value)
//     {
//         return value +number
//     }
// }

// const addfive = createadder(10);

// console.log(addfive(5));



console.log("Async Opretaion");

/*

console.log("Start");

setTimeout(()=>{
    console.log("Run after 2 s");
},2000)

console.log("Stop");



console.log("Start");

setTimeout(() => {
    console.log("run after 1 s");

    setTimeout(()=>{
        console.log("run after 2 s");

        setTimeout(()=>{
            console.log("run after 3 s");

            setTimeout(()=>{
                console.log("run after 4 s");
            },2000);

        },1500);

    },1000)

},500);



console.log("Stop");

*/

console.log("Promises");

/*
const mypromises = new Promise((resolve , reject)=>{


    let answer = true;

    if(answer)
    {
        resolve("Resolved");
    }
    else{
        reject("Rejected");
    }

});

mypromises
.then(data => console.log(data))
.catch(error => console.log(error));


function firstUser()
{
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            resolve("first user worked after 0.5s")
        },500);
    })
}

function seconduser()
{
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            resolve("second user worked after 1s")
        },1000);
    })
}

function thirduser()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Thirduser worked after 1.5 s ")
        }, 1500);
    })
}

firstUser()
.then((data)=>{
    console.log(data);
    return seconduser();
})
.then((data)=>{
    console.log(data);
    return thirduser();
})
.then((data)=>{
    console.log(data);

})
.catch((err)=>{
    console.log("error");
})

*/


console.log("Class / Object");

/*

class Person{

    constructor(name , age , dept)
    {
        this.name = name ;
        this.age = age ;
        this.dept = dept;
    }

    details()
    {
        console.log(`The student name is ${this.name} , age is ${this.age} , dept is  ${this.dept}`);
    }

    changedept(newdept)
    {
        this.dept = newdept;
    }

}


const p1 = new Person("haneef" , 12 , "cse");

p1.details();

p1.changedept("software");

p1.details();

*/


console.log("Hoisting");


/*

console.log(add(4,6)); // function declare will hoisted

function add(a,b)
{
    return a+b;
}

console.log(a); // var is hoisted but didn't initailise so undefine
var a = 20;


console.log(b);
let b = 30 ;    // let is not hoisted and makes error

console.log(d);
const d = 30 ;     // const is not hoisted and makes error

*/


















