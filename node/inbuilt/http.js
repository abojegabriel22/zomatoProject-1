let http = require('http');

//req > what we send to server(params,quer,body)
//res > what server gives us
//The server will always respond to something but not necessary that you send something to serveer
let server = http.createServer((req,res)=>{
    res.write('Hi from http server abojes Gabriel full stack web developer');
    res.end();
})

server.listen(1264);
//http://localhost:1234
