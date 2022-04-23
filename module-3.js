//Common JS every file is a module
// Modules encapsulated Code only share minimum

const {John,Elen,Peter} = require('./name-4')
const Sayhi = require('./utils-5')
const data = require('./alternative-flavor-6')
//import function without exports from mind grenade file
require('./mind-grenade-7')
Sayhi(Peter)
console.log(data)