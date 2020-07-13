const fs = require('fs');

fs.mkdir('platzi/escuela-js', {recursive: true}, (err)=>{
    if(err){
        console.log(err)
    }
})