//setInterval(()=>{
   // console.log("Hello")
//},2000)
function printstuff(){
    console.log("Hello world");
}
setInterval(printstuff,2000);
const timerId=setTimeout(printstuff,1000);
clearTimeout(timerId);


setImmediate(printstuff);
const timerId1=setImmediate(printstuff);
clearImmediate(timerId1);