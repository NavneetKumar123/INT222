const http=require('http');
const host = 'localhost';
const port = 4000;
const requestListener=function(req, res){
   // res.end("hello")
  // res.setHeader("Content-Type","text/html")
   res.writeHeader(400,{"Content-Type":"text/html"});
   res.end(`<html>
   <body>
   <h1>heelllllooooo</h1>
   </body>
   </html>`)

}






const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});



