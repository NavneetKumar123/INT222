const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url =='/data'){
        res.writeHead(200,{'Content-Type': 'application/json'})
        // res.end(JSON.stringify({
        //     name1:"Navneet",
        //     lastname:"kumar",

        // }))
        res.end(JSON.stringify({
            brand:"Anu",
            modelnumber:"2000",
            price:"Infinite"

        }))

    
    }
    

})
server.listen(9000,"127.0.0.1",()=>{
    console.log("server is listening on port no0 9000")
})
//home
//about
//contact

