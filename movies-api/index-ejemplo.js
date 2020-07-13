//Obtenemos express 
const express = require('express')
//Se ejecuta express para crear la nueva app 
const app = express()

//Traemos nuestra configuracion 
const {config} = require('./config/index')

//La manera de crear rutas con express es llamando a app, le indicamos el metodo, 
//la ruta y luego va a recicbir una funcion con el objeto request y response 
app.get('/', (req,res)=>{
    res.send('hello world')
})

//Para explorar las diferentes respuestas cambiamos a la ruta json
//y vamos a devolver un json
app.get('/json', (req,res)=>{
    res.json({hello: 'world'})
})

app.get('/:year', (req,res)=>{
    const year = parseInt(req.params.year);
    const esBisiesto = year % 4 === 0 && year % 100 !== 0 || year % 400 === 0
    if (esBisiesto){
        res.send(`${year} es bisiesto`)
    } else {
        res.send(`${year} no es bisiesto`)
    }
   
})

//Para correr el servidor, traemos el puerto creado en config 
app.listen(config.port, ()=>{
    console.log(`Listening http://localhost:${config.port}`)
})

