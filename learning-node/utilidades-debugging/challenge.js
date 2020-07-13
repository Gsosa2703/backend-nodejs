const consoleFile = new console.Console(process.stdout);

consoleFile.welcome = ()=>{
    console.log(`Welcome to a new session, Today is ${new Date()}`)
}

consoleFile.info = ()=>{
    console.log('This is an info')
}

consoleFile.error = () =>{
    console.log('This is an error')
}

consoleFile.success = ()=>{
    console.log('This is a success')
}

consoleFile.welcome()
consoleFile.error()
consoleFile.success()
consoleFile.info()