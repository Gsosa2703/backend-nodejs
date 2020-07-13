const fs = require('fs');

const server = require('http');

//con este formato el archivo se consume toda la memoria del servidor y esto es muy muy malo, ya que si hacemos multiples peticiones
//esto va a crecar y crecae hasta que nos quedemos sin memoria
server.on('request', (req,res)=>{
    fs.readFile('.big', (err, data)=>{
        if(err){
            console.log(err)
        }else{
            res.end(data)
        }
    })
})

server.listen(3000);
