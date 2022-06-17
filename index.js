const http = require('http');
const server = http.createServer((req,res)=>{
    if (req.url === '/') {
        res.setHeader("Content-type","text/html");
        res.end('<html><head><title>My Portfolio</title></head><body><p>Name:<span id="name"></span></p><p>Profession:<span id="career"></span></p><p>Skills:<span id="skills"></span></p></body></html>');
    }
})
server.listen(3000)
console.log('Listening to port 3000...')