//API are the url that gives us data
let http = require('http');
let fs = require('fs');
let port = 3463;

let server = http.createServer((req,res)=>{
    fs.readFile('myLoc.json','utf-8',(err,data)=>{
        if(err) throw err;
        res.write(data)
        res.end();
    })
});

server.listen(port);

//express is the fram work of the node js which helps to achieve the functionality of routing. helps to create the route
//open cmd as administration