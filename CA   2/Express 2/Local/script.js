console.log("hello");
console.log(2+2);
var y=20;
for(var i=1;i<=y;i++){
    if(i % 2==0){
        console.log(i +  " is even number")
    }else{
        console.log(i + "  is odd");
    }

}
let string = "";
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
// 	document.getElementById("p1").innerHTML = current_date;

     

let d = new Date();
document.getElementById("demo").innerHTML = d;

const date=new Date();
date.setDate(date.getDate()+1);
document.getElementById("sumi").innerHTML = date;

const Date1 =new Date();
Date1.setDate(Date1.getDate()+2);
document.getElementById("aru").innerHTML = Date1