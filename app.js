const fs=require("fs"); // using builtin module fs-file system

/*read.txt-path of file(if not there nw file is created)
"welcome to channel"- data to be written in file.
This is synchronus function */
/*fs.writeFileSync('read.txt',"welcome to channel")

//when we use this method twice data gets overided.
fs.writeFileSync('read.txt',"HEllo world")

//to add data in a existing file without overriding earlier data.
fs.appendFileSync('read.txt'," how are you I am fine")*/
/*
//buffer datatype in jaascript. stores binary data. given function returns binary value
const buffer_data=fs.readFileSync('readonly.txt');
console.log(buffer_data)

//to read actual data.
const data=buffer_data.toString()
console.log(data)

//to rename file.
//fs.renameSync("read.txt","readonly.txt")*/

//Asynchronus fs method.have callback function- activity performed at the end .
fs.writeFile("readonly.txt","Hi this is asynchronus",(err)=>{console.log("file written")
console.log(err)})

const amount=12;
if (amount<10){
    console.log("small");
}
else
console.log("big")

console.log("my first node app")

// globals variable -no window
// __dirname-path to current directory
//__filename
//require-function to use modules
//module-info about current module
//process -info about environment where project is being executed
console.log(__dirname)

/*setInterval(()=>{
    console.log("hello world")
},1000)*/ // function to execute any activity after a given interval.

/*declaring a function.
name-function name  ,myname-argument passed/paramter 
=>-direct to body of functon
{..}-encloses fun body*/
const name=(myname)=>{console.log("this is ${} "+myname)} ;
name("priya");
function aname(myname){console.log("hello")}
aname("asha")