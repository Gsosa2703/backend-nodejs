const http = require('http');
// un servidor eco es aquel que recibe datos y los imprime directamente
const server = http.createServer();

server.on('request', (req,res)=> {
    if(req.method === 'POST' && req.url == '/echo'){
       let body = [];
       //el objeto request es un readableStream y heredan de los event emitter
       
       req.on('data', chunk => { 
        body.push(chunk)
       })
       .on('end', ()=> {
        res.writeHead(200, {'Content-Type': 'text/plain'})
        body = Buffer.concat(body).toString()
        res.end(body)

       })   
    
    } else {
        res.statusCode = 404;
        res.end()
    }
   
})
server.listen(8001);
console.log('Servidor en la url http://localhost:8001');

