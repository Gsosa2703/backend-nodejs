const http = require('http');

const server = http.createServer();


server.on('request', (req,res)=>{
    if( req.method === 'POST' && req.url === '/birthday') {
        let body = [];
        //el objeto request es un readableStream y heredan de los event emitter
        
        req.on('data', chunk => { 

        const birthday = new Date(chunk);
        const day =  dayOfBirthday(birthday.getDay());
        const buf = Buffer.from(day, 'utf-8');
        body.push(buf)


        })
        .on('end', ()=> {
         res.writeHead(200, {'Content-Type': 'text/plain'})
         body = Buffer.concat(body).toString()
         res.end(body)
 
        })   

    } else{ 
        res.statusCode = 400;
        res.end()
    }
})

server.listen(3000)
console.log('Servidor en la url http://localhost:8001');

function dayOfBirthday(day){
    switch(day){
        case 0 :
            return 'Domingo'
            break
        case 1 :
            return 'Lunes'
            break
        case 2 :
            return 'Martes'
        case 3 :
            return 'Miercoles'
            break
        case 4:
            return 'Jueves'
            break
        case 5:
            return 'Viernes'
            break
        case 6: 
            return 'Sabado'
            break
        default:
            'introduzca un dia valido'
    }
}

