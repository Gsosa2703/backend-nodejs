const fs = require('fs');

const server = require('http').createServer();

server.on('request', (req,res)=>{
    //createrReadStream lo que hace es leer nuestro archivo como un stream, nos devuelve el source de nuestro archivo 
  const src = fs.createReadStream('./big')
  //los readableStream tienen un metodo que se llama pipe, y al hacer pipe lo que hacemos es integrar un readable stream
  //el objeto response object tambien es readable stream 
  src.pipe(res)

})

server.listen(3000);
