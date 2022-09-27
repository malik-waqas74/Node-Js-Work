

const http = require('http');


// createserver() creates the server
// req    This object is used to get info abouth
//        current http request.
// res    This object is used to send a response
//        for current request.
const server = http.createServer((req,res)=>{
    if(req.url=='/'){
    //200 ok status code
    res.writeHead(200);
    res.end('Welcome to Home Page!');}//simple respond some request

    else if(req.url=='/about'){
        //200 ok status code
        res.writeHead(200);
        res.end('About US page!');
    }
    else if(req.url==='/contact'){

        // 200 ok   status code
        // All the pages have document type
        res.writeHead(200);
        res.end('Contact Page');
    }
    else{
        //404 status code
        // we don't have page so change its content type
        res.writeHead(404,{"content-type":"text/html"});
        res.end('404 Error! Page not exits');
    }
});

// Listning to request

// pass the parameter as port
server.listen(8000,'127.0.0.1',()=>{
    console.log("listening to the port number 8000");  
});//port,local host


//HTTP request routing
//  req.url  === moving to that repsonse
