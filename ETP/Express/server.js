const express=require('express');
const app = express();
const bodyParser=require('body-parser');
app.use(bodyParser.json());
app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/index.html");
})
app.get('/login',(req,res)=>{
    res.sendFile(__dirname + "/login.html");
})
app.post('/login',(req,res)=>{
    response={

         username: req.body.username,
         password:req.body.password
    }
    console.log(response);
   res.end(JSON.stringify(response));
   
})





app.listen(5000, ()=>{
    console.log(`app is running 0n *:4000`)
})