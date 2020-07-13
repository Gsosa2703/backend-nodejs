const EventEmitter= require('events');

class Logger extends EventEmitter{
     execute(cb){
         (async () => {
            console.log('Before');
            this.emit('start');
            try{
                const callback = await cb;
                console.log(callback)

            } catch(e){
                console.log(e)
            }
             this.emit('finish')
             console.log('After')
         })()
      
    }
}

const logger = new Logger()

logger.on('start', ()=> console.log('Starting'));
logger.on('finish', ()=> console.log('finishing'))
logger.on('finish', ()=> console.log('it is done'))

//logger.execute(() => console.log('hello world'))

logger.execute( new Promise((resolve, reject)  => {
        if (Math.random() > 0.5){
            setTimeout(()=> {
            resolve('hello world')
            , 500
            })
            
        } else {
            reject('error de hello world ')
        }
}));
