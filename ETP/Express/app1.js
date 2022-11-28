const express = require('express');
const app = express();
const port = 5000;

//app.use(express.static('public'));
app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "form.html" );
})



app.get('/get', function(req,res){
    response = {
        firstName : req.query.Name,
        email: req.query.email
    };

    console.log(response);
    res.end(JSON.stringify(response));
})

app.listen(port,()=>{
     console.log(`server is running on ${port}`);
})