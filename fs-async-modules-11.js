//async fs module 
const  {readFile,writeFile} = require('fs')
readFile('./content/first.txt',"utf8",(err,result)=>{
    if (err){
        console.log(err)
        return
    }
    const first = result
    readFile('./content/second.txt',"utf8",(err,result)=>{
        if (err){
            console.log(err)
            return
        }
        const second = result
        writeFile('./content/async-result.txt',"hello Im async file",(err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log(result)
        })
    })
    
})