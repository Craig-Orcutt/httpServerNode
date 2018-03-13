const http  = require('http');
const server = http.createServer()

server.on('request',(req,res)=>{
    console.log('request received for:', req.url)
    res.end(`<h1>Welcome to my first Node.js Web Server</h1>`);
    
})
server.listen(8080);