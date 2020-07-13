const fs = require('fs');
//De manera sincrona lo mejor es hahcer un try catch para asi captar el error

try {
    //con el process.argv podemos leer lo que nos pasan por la terminal
const file = process.argv[2]

const content = fs.readFileSync(file).toString()

const lines = content.split('\n').length;
console.log(lines)
} catch(err){
    console.log(err)

}