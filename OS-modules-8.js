//os modules
const os = require('os')
//Info about current User
const user = os.userInfo()
console.log(user)
//info about System time
console.log(`The system time is ${os.uptime()}`)
const currentOs = {
    name: os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}
console.log(currentOs)