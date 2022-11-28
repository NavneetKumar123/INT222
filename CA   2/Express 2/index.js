const express=require('express');
const app = express();
const port=5000;


// app.get('/temp',(req,res)=>{
//     res.send([
//         {
//         id:4,
//         name:"navneet",
//         role:"developer"
//     }
// ]);
// })
// app.post('/hii',(req,res)=>{
//     res.send([
//         {

//             id:6,
//             name:"navneet kumar",
//             role:"frontend"
//         }

//     ]);

// })
const postData = [
    {
        "id":101,
        "name":"Navneet",
        "age":20
    }
]
app.get('/users',(req,res)=>{
    res.json(postData);
});
app.post('/users',(req,res)=>{
    res.json(postData);
})











app.listen(port, ()=>{
    console.log(`listening to the port no ${port}`);
});