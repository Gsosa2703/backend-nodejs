const {Transform} = require('stream');

const camelCaseTransform = new Transform({
 transform(chunk, encoding,cb){
     let sentenceUpperCase = chunk.toString().replace(/\b\w/g, l => l.toUpperCase());
     let sentenceCamelCase = sentenceUpperCase.replace(/ /g, "");
     this.push(sentenceCamelCase);
     cb()
 }

})
process.stdin.pipe(camelCaseTransform).pipe(process.stdout)
