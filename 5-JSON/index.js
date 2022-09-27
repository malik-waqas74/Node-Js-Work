const fs = require('fs');
const bioData2 = {
    name : 'Ali',
    Age  :  '23',
    Address : "Islamabad"
}

const JsonData = JSON.stringify(bioData2);
console.log(JsonData);
//writing to a file
fs.writeFile('json1.json',JsonData,(err)=>{
    if(err)
    throw err;
});

// reading from file

// fs.readFile('json1.json','utf-8',(err,data)=>{
    
// const DataObject = JSON.parse(data);
// console.log(DataObject);
    
// });

