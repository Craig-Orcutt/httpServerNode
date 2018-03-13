const {createServer}  = require('http');
const { readFile} = require('fs');
const server = createServer()

// server.on('request',(req,res)=>{
//     console.log('request received for:', req.url)
//     res.end(``);
    
// })


server.on ('request', (req, res) =>{
    
    // console.log('request method', req.method, "request url", req.url, 'request header', req.headers);
    
    // res.writeHead(200, {"useless-message": "hello"})
    // res.write("<h1> Hello, world </h1>");
    // res.end();
    // readFile('./index.html', (err, file) => {
    //     if(err) { res.statusCode = 404; res.end()}
    //     res.end(file)
    // })
    let url = req.url
    let resource = url.slice(-1) === '/' ? url.slice(1).concat('index.html') : `${url.slice(1)}.html`
    readFile(resource, (err, file) =>{
        if(err) {
            res.statusCode = 404;
        return res.end('Not found')
        }
        res.end(file)
    })
});

server.listen(8080);