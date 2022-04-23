//Path module
const path = require('path')
//Join all arguments together and normalize the resulting path
const filepath = path.join("content","subfolder","test.txt")
console.log(filepath)
//returns last portion of path example here it will be test.txt
const base = path.basename(filepath)
console.log(base);
//returns the absolute path of file direction
const absolute = path.resolve(__dirname,"content","subfolder","test.txt")
console.log(absolute);
