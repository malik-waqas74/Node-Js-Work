const add = (a,b) => {

    return a+b;
}
const sub = (a,b) => {

    return a-b;
}

const mul = (a,b) => {

    return a*b;
}

const div = (a,b) => {

    return a/b;
}


// One Way
module.exports.add = add;
module.exports.mul= mul;
module.exports.sub = sub;
module.exports.div = div;

// Shortes way
 

module.exports = {add,sub,div,mul};