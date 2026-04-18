function fact(n)
{
    if(n==0)
    {
        return 1;
    }

    return n*fact(n-1);
}

function add(a , b)
{
    return a+b;
}

const sub = (a,b) => {
    return a-b;
}

const radius = 20;

// export directly 

const cuboid = (l,b,h) => {
    return l*b*h;
}

let value = 100;

// exports the single function or varaible

// module.exports = fact;

// multiple exports the function or varaible

module.exports = {
    fact , 
    add , 
    sub , 
    radius , 
    cuboid , 
    value
}


// another exports method
// use any one exports methods only

// exports.cuboid = cuboid;
// exports.value = value;