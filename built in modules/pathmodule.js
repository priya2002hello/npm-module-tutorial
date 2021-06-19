//path module.
const path=require('path')

//path seperator
console.log(path.sep)

//joining file path
const filepath=path.join('Node JS TUT','read.txt')
console.log(filepath)

//accesing file basename.
const basename=path.basename(filepath)
console.log(basename)

//to get absolute path of file.
const absolute_path=path.resolve("NODE JS TUT","app.js")
console.log(absolute_path)