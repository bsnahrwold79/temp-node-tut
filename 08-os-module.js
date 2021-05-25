// method returns the system uptime in seconds
const os = require('os')
console.log(`The user is ${os.userInfo()}`)
console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}
console.log(currentOS)
