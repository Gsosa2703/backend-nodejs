const promise = () => new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(Math.random() < 0.5) {
            resolve( 'hello world')
        } else {
            reject(new Error('hello error'))
        }
    }, 2000)
})


const async = async () => {
    try{
        const msg = await promise();
        console.log('msg', msg)

    }catch(err){
        console.log('error', err)
    }
}

async()