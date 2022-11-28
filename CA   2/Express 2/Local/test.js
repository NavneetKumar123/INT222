<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
    <link href="style.css"rel= "stylesheet" type="text/css" />
    <link href="cute.css"rel= "stylesheet" type="text/css" />

</head>
<body>
    <h1 class="text-center">Welcome to Calculate me</h1>
    
  <!-- <h1>Date</h1>
  <p id="p1"></p> -->
   

   <div class="cont">
    <p id="demo"></p>

    <!-- current time <span id="time"> -->
    <!-- </span> -->

<p id="sumi"></p>
<p id="aru"></p>

    <div class="container flex flex-col items-center  mx-auto ">
    <div class="row">

        <input class="input"type ="text"/>

    </div…
[3:26 pm, 10/10/2022] Navneet Airtel: let string = "";
let button = document.querySelectorAll('.button');
// const date= new Date();
// console.log(date,"date-time")

Array.from (button).forEach((button)=>{
button.addEventListener('click',(e)=>{
    if (e.target.innerHTML == '='){
    string = eval(string);
    document.querySelector ('input'). value = string;
    }
    else if(e.target.innerHTML == 'C'){
        string = ""
        document.querySelector ('input'). value = string;
        }
    
    else{
console.log (e.target)
string = string + e.target.innerHTML
document.querySelector ('input'). value = string;
    }
})

})


// var date = new Date();
// 	var current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
// 	document.getElementById("p1").innerHTML = current_da…