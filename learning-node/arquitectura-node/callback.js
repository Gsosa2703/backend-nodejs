const asyncCallback = (callbak) => {
    setTimeout(()=>{
        if(Math.random() < 0.5) {
            //ErrorFristCalbback, cuando un callbak tiene un error lo primero que hay que pasarle por parametro es el error 
            return callbak(null, 'hello world')
        } else {
            callbak(new Error('hello error'))
        }
    }, 2000)
}

asyncCallback((err, message)=>{
    //en errorFirstCallback lo primero hay que verificar es si existe un error
    if(err){
        console.log('error', err)
    }else {
        console.log('message', message)
    }
})