//os module
const os=require('os')

// provides user info
const user=os.userInfo()
console.log(user)

//system uptime in seconds.
console.log('the system uptimeis:',os.uptime())

//info about current os.
const cur_os={
    name:os.type(),
    release:os.release(),
    sysmem:os.totalmem(),
    freemem:os.freemem()
}
console.log(cur_os)