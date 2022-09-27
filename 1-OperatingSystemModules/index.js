

const os = require('os');
console.log(os.arch());

console.log(os.version());

// returns the Free Memory size in bytes
const freeMemory = os.freemem();

console.log(`${freeMemory/1024/1024/1024}`+' GBs');

//console.log(os.networkInterfaces());

const totalMemory = os.totalmem();
console.log(`${totalMemory/1024/1024/1024}`+'GBs');

console.log(os.type());