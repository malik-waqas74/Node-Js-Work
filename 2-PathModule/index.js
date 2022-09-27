

const path = require('path');
// Returns the path
console.log('Full Path Name : '+path.dirname('C:\Users\Malik Waqas\Desktop\intro-to-node\2-PathModule/index.js'));


//Returns extension of this file
console.log('Extesion : '+path.extname('C:\Users\Malik Waqas\Desktop\intro-to-node\2-PathModule/index.js'));

//Return file name with extension
console.log('File name : '+path.basename('C:\Users\Malik Waqas\Desktop\intro-to-node\2-PathModule/index.js'));

// Return all the information about file as an object
console.log(path.parse('C:\Users\Malik Waqas\Desktop\intro-to-node\2-PathModule/index.js'));

// If i wnat only name
const myName =path.parse('C:\Users\Malik Waqas\Desktop\intro-to-node\2-PathModule/index.js');
console.log(myName.name);