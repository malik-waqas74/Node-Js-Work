
const fs = require('fs');
const http = require('http');
const { Stream } = require('stream');

const server =http.createServer();

server.on("request",(req,res)=>{
    // fs.readFile("input.txt","utf-8",(err,data)=>{
    //     if(err)
    //     console.log(err);
    //     else
    //     res.end(data.toString());

    // });

    // Now do it with Streams

    // const rstream = fs.createReadStream("input.txt");

    // rstream.on("data",(chunkData)=>{

    //     res.write(chunkData);

    // });

    // rstream.on("end",()=>{
    //     res.end();
    // });
    // rstream.on("error",()=>{
    //     res.writeHead(404,{"content-type":"text/html"});
    //     res.end("404 Not Found");
    // })


    //Streams Pipes

    const rstream = fs.createReadStream("input.txt");
    rstream.pipe(res);

});

server.listen(8000,"127.0.0.1",()=>{
    console.log("Sever is started!");
});