const fs = require("fs");
const http = require("http");
const server =http.createServer();
server.on("request",(req, res) => {
    var fs=require("fs");
    fs.readFile("input.txt",(err, data) => {
        if(err) return console.log(err);
        res.end(data.toString());
    });
});
server.listen(6000);


