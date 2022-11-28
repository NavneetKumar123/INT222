let d=new Date();
console.log(d.getDate());
console.log(d.getDay());
console.log(d.getTime());
console.log(d.getFullYear());
console.log(d.getSeconds());
console.log(d.getMonth());
console.log(d.getMinutes());




function getLargest(a, b, c,d,e) {
    let numArray = [a, b, c, d, e];
    return numArray.reduce((a, b, c, d, e) => (a > b ? a : b));
  }
  
  console.log(getLargest(7,9,12,15,100));
  
  
  
  
  function  sumTriple(x,y){
    if(x == y){
        return 3*(x+y);
    }
    return(x+y);
  }
  console.log(sumTriple(10,20));
  console.log(sumTriple(10,10));

//Write a program to find the area of triangles where length of its sides are 5,6,7;
  var side1=5;
  var side2=6;
  var side3=7;
  var s=(side1+side2+side3)/2;
  var area=Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
  console.log(area);



//   const operator = prompt('Enter operator ( either +, -, * or / ): ');


//   const number1=parseFloat(prompt("Enter your First Number"));
//   const number2=parseFloat(prompt("Enter your Second Number"));

//   let result;

//   if(operator == '+'){
//     return number1+number2;
//   }
//   else if(operator == '-'){
//     return number1-number2;
//   }
//   else if(operator == '*'){
//     return number1*number2;
//   }else{
//     return number1/number2;
//   }
//   console.log(`${number1} ${operator} ${number2} = ${result}`);


  const operator = ('Enter operator ( either +, -, * or / ): ');

// take the operand input
const number1 = parseFloat('Enter first number: ');
const number2 = parseFloat('Enter second number: ');

let result;

// using if...else if... else
if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

// display the result
console.log(`${number1} ${operator} ${number2} = ${result}`);




