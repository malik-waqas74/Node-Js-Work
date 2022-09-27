
const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    const data = fs.readFileSync("ja.json","utf-8");
    const objectData = JSON.parse(data);

    if(req.url=="/"){
        res.end("Welcome !");
    }
    else if(req.url=="/userApi"){
        res.writeHead(200,{"content-type":"application/json"});
        res.end(data);
        

    }

    else{
        res.writeHead(404,{"content-type" : "text/html"});
        res.end("404! not Found");
    }
    
    
    
});

server.listen(8000,"127.0.0.1",()=>{
    console.log("Sever is loaded!");

});
