const http=require("http");

//creating server.
const server=http.createServer((req,res)=>{
    res.write("hello this is server, welcome to new web page")
    console.log("server is running")
    res.end("Hello this is big font ")
   //important to display web page.
})

//assigning port number to server.
server.listen("5200")