const express = require('express');
const app =express();
const port = process.env.port || 3000;


app.get("/",(req,res,next)=>{
    console.log("Hey");
    next();
},
(req,res)=>{
    res.send(`<div>


    <h2> welcome to my world </h2>
    </div>`)
}
)

// app.get(
//     "/",
//     (req, res, next) => {
//       console.log("hello");
//       next();
//     },
//     (req, res) => {
//       res.send(`<div>
//       <h2>Welcome to GeeksforGeeks</h2>
//       <h5>Tutorial on Middleware</h5>
//     </div>`);
//     }
//   );




app.listen(port, () => {
    console.log(`boom baaam ${port}`);
  });