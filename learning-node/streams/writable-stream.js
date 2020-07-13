const {Writable} = require('stream');

const writableStream = new Writable({
    //El metodo write tiene 3 parametros chunk(pedazos de datos que nos llegan mientras estamos escribiendo), encoding que puede ser opcional que es la manera 
    // para definir la codificacion y un callback
    write(chunk, enconding, callback){
        console.log(chunk.toString())
        callback()
    }

})
//Lo importante con los writable stream es que tienen que estar anadidos a un writable stream
// se usa process.stdin que es la funcinalidad nativa que se encarga de leer los datos, se llama ppipe y dentor el writable stream
process.stdin.pipe(writableStream);
