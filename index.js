const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    if (req.url === '/' || req.url === '/home') {
        fs.readFile('index.html',(err,data)=>{
            if (err) {
                throw console.error(err);
            }
            res.writeHead(200,"Success",{"content-type":"text/html"});
            res.write(data);
            res.end();
        });
    }

    if (req.url === '/about') {
        fs.readFile('about.html',(err,data)=>{
            if (err) {
                throw console.error(err);
            }
            res.writeHead(200,"Success",{"content-type":"text/html"});
            res.write(data);
            res.end();
        });
    }

    if (req.url === '/contact') {
        fs.readFile('contact.html',(err,data)=>{
            if (err) {
                throw console.error(err);
            }
            res.writeHead(200,"Success",{"content-type":"text/html"});
            res.write(data);
            res.end();
        });
    }
})
server.listen(3000)
console.log('Listening to port 3000...')