const express = require('express')
const app = express();
const {check,validationResult}=require('express-validator')

app.use(express.urlencoded());
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/formvalidation.html')
})
app.post('/savedata',[
    check('name').isAlpha().withMessage('Must be in alpha').isLength({min:10 , max:20}).withMessage('Name length should be 10 to 20 charachter'),
    check('email').isEmail().withMessage('Must be a email').isLength({min:10 , max:30}).withMessage('Name length should be 10 to 30'),
    check('password').isLength({min:10 , max:20}).withMessage('must be 10 to 30'),
    check('number').isLength({min:10,max:20}).withMessage('must be 10 to 20 ')
],(req,res)=>{
 const errors=validationResult(req)
 if(!errors.isEmpty()){
    res.send(errors)
 }else{
    response={
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        number:req.body.number

    };
    console.log(response)
    let data = JSON.stringify(response)
    console.log (data)
 }
})






app.listen(9000,()=>{
    console.log(`listening on the port *: 3000`)
})