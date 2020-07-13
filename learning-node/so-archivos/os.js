const os = require('os');


//console.log('CPU INFOS:', os.cpus())
//console.log('IP address', os.networkInterfaces().lo.map(l => l.address))
console.log('Free memory', os.freemem())
console.log('Type', os.type())
console.log('50 version', os.release())
console.log('Usr info', os.userInfo())