//%s String
//%d Numero
//%j JSON


// console.log("Un %s y un %s", "perrito", "gatito")

// console.info('Hello world')
// console.warn('hola error')

// console.assert( 42 === '42')

// console.trace('hello')

const util = require('util')
const debuglog = util.debuglog('foo')

debuglog('hello from foo');

