const fs = require('fs');

const copy = process.argv[2]
const paste = process.argv[3];

fs.copyFile(copy, paste, err=> {
    err ? console.log(err):
    console.log(`${copy} fue copiado en ${paste}`)
})