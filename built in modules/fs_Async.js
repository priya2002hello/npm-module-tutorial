//fs module. accessing only read and write synchronus method from fs module.
const {readFile,writeFile}=require('fs')

//alternative for call back are promises and async await.to be dealt later on.
//reading data from file
readFile("./readonly.txt","utf-8",(err,result)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(result)
        console.log("finished up reading file")
    }
})

//writing data in file.
writeFile("./readonly.txt","Asynchonusly overwritten file","utf-8",(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    else
    console.log("file is overwritten")
})
//appending data.




