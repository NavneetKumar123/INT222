var app = require('express')();
var http=require('http').Server(app);
var io= require('socket.io')(http);
app.get("/",(req,res)=>{
    res.sendFile(__dirname + '/app.html');
});
io.on('connection',function(socket){
    console.log("A user is connected ...................")
    socket.on('disconnect',function(){
        console.log("A user is disconnected...........")
    });
});
http.listen(3000, function(){
    console.log('listening on *:3000');
 });