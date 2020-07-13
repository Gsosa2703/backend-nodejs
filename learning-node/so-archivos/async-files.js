const fs = require('fs');
const file = process.argv[2]
//De manera asincrona usamos unn try/catch error 


if(!file){
    throw new Error ('Debes indicar el archivo que quieres leer')
}

const content = fs.readFile(file, (err,content)=>{
    
    if(err){
        return console.error(err)
    }
    
    const lines = content.toString().split('\n').length;
    console.log(lines)
})
