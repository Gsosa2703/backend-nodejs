const {config} = require('../../config');
const boom = require('@hapi/boom')

function withErrorStack(err, stack){
    if(config.dev){
        return {...err, stack}
    }

    return err 

}
function logErrors(err,req,res,next){
        console.log(err)
        next(err)
}

function wrapErrors(err,req,res,next){
    if(!err.isBoom){
        next(boom.badImplementation(err))
    }
    next(err)
}

//esta funcion me va a ayudar a darle manejo al error, por defecto express imprime los datos en html
//como esto es una API lo mas necesario es que sea en formato JSON
function errorHandler(err, req,res,next){
    const {
        output: {statusCode, payload}
    } = err
    res.status(statusCode)
    res.json(withErrorStack(payload, err.stack))
}

module.exports = {
    logErrors,
    wrapErrors,
    errorHandler
} 