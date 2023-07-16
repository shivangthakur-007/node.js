const http=require('http');
const server=http.createServer((req, res)=>{
    if(req.url=='/'){
        res.write('<h1>Hello! Node.js</h1>')
    }
    else if(req.url=='/about'){
        res.write('<h1>about! Node.js</h1>')
    }
    res.end();
});
server.listen(3000);
console.log('the http server is running on port 3000')