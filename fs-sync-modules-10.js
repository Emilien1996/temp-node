//sync fs modules
const {readFileSync,writeFileSync} = require('fs')
const first = readFileSync('./content/first.txt',"utf8")
const second = readFileSync('./content/second.txt',"utf8")
//flag a append the text and not overwrite
writeFileSync("./content/result-sync.txt",`Here is the result ${first} ${second}`,{flag:'a'})