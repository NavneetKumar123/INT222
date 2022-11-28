const express=require('express');
const app = express();
const port=3000;

app.get('/hello', (req, res) => {
    res.send("hello world")
})
app.get('/about',(req,res)=>{
    res.send("welcome to my about page");
})
app.get('/contact',(req,res)=>{
    res.send("welcome to my contact page");
})
app.get('/temp',(req,res)=>{
    res.send([
        {
        id:4,
        name:"navneet",
        role:"developer"
    }
]);
})












app.listen(port, ()=>{
    console.log(`listening to the port no ${port}`);
});