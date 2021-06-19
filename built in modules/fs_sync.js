//fs module. accessing only read and write synchronus method from fs module.
const {readFileSync,writeFileSync}=require('fs')

//reading data from file
console.log(readFileSync("./readonly.txt"))//buffer entity.

console.log(readFileSync("./readonly.txt",'utf8'))//utf-8 gave string entity.

console.log(readFileSync("./readonly.txt","ascii")) //ascii/string value entity.

//writing data in file.
writeFileSync("./readonly.txt","This is overwritten file")

//appending data.
writeFileSync("./readonly.txt","appended data",{flag:'a'})
