// const http=require('http');
// const server=http.createServer((req,res)=>{
//     if(req.url=="/"){
//         res.end("hello home")
//     }else if(IDBRequest.url=="/about"){
//         res.end("hello about")
//     }else{
//         res.end("404 error pages");
//     }


// })
// server.listen(8000,"127.0.0.1",()=>{
// console.log("listening ton the port no 8000");
// })
const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.end("hello world ............")
    }else if(req.url=="/about"){
        res.end("hello about........")
    }

})
server.listen(8000,"127.0.0.1",()=>{
    console.log("server is listening on port no0 8000")
})