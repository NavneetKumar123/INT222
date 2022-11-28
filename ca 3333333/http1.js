const http = require("http");

const host = 'localhost';
const port = 9000;

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(`<html><body >
    <h1> Welcome to factorial  </h1>  
Enter a number: <input id = "number">  
<br><br>  
<button onclick = "fact1()"> Factorial </button>  
<p id = "res"></p>  
<script>  
function fact(num)   
{  
if (num == 0) {  
return 1;  
}  
else {  
return num * fact( num - 1 );  
}  
}  
function fact1()  
{  
var num = document.getElementById("number").value;  
var f = fact(num);  
document.getElementById("res").innerHTML="The factorial of the number " + num + " is: " + f ;  
}  
</script>  

    </body></html>`);
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});