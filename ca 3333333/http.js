// const http = require("http");

// const host = 'localhost';
// const port = 4000;

// const requestListener = function (req, res) {
//     res.setHeader("Content-Type", "text/html");
//     res.writeHead(200);
//     res.end(`<html><body>
//     <form>
// 1st Number : <input type="text" id="firstNumber" /><br>
// 2nd Number: <input type="text" id="secondNumber" /><br>
// <input type="button" onClick="multiplyBy()" Value="Multiply" />
// <input type="button" onClick="divideBy()" Value="Divide" />
// <input type="button" onClick="addBy()" Value="Add" />
// <input type="button" onClick="subtractBy()" Value="Subtract" />
// </form>
// <p>The Result is : <br>
// <span id = "result"></span>
// </p>
// <script>
// function addBy(){
//     num1=document.getElementById("firstNumber").value;
//     num2 = document.getElementById("secondNumber").value;
//         document.getElementById("result").innerHTML = num1 + num2;

// }
// function subtractBy(){
//     num1 = document.getElementById("firstNumber").value;
//         num2 = document.getElementById("secondNumber").value;
//         document.getElementById("result").innerHTML = num1 - num2;

// }
// function multiplyBy()
// {
//         num1 = document.getElementById("firstNumber").value;
//         num2 = document.getElementById("secondNumber").value;
//         document.getElementById("result").innerHTML = num1 * num2;
// }

// function divideBy() 
// { 
//         num1 = document.getElementById("firstNumber").value;
//         num2 = document.getElementById("secondNumber").value;
// document.getElementById("result").innerHTML = num1 / num2;
// }

// </script>

//     </body></html>`);
// };

// const server = http.createServer(requestListener);
// server.listen(port, host, () => {
//     console.log(`Server is running on http://${host}:${port}`);
// });
const http = require('http');
const server=http.createServer((req,res)=>{
    res.end(`<html>
    <body>
    Enter Number: <input type="number" id="temp" />
    <input type="button" onClick=tempBy() Value="Temperature" />
    <p>Results:
    <span id="temp1"></span>
    </p>
    <script>
    function tempBy(){
        num1=document.getElementById("temp").value;
        document.getElementById("temp1").innerHTML=(num1-32)/1.8;
    }
    </script>

    </body>
    </html>`)

})

server.listen(3000);
