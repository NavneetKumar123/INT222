const fs = require("fs");

// fs.readFile("./data.json", "utf8", (err, jsonString) => {
//   if (err) {
//     console.log("Error reading file from disk:", err);
//     return;
//   }
//   try {
//     const customer = JSON.parse(jsonString);
//     console.log("data is:", jsonString);
//   } catch (err) {
//     console.log("Error parsing JSON string:", err);
//   }
// });
// const users=require("./data.json")
// console.log(users);

///////////////////////////////////////////read file /////////////////////////////////////
// const { log } = require('console');
// //const fs=require('fs');
// fs.readFile("./data.json" ,function (err,data){
//   if(err) throw err;
//  const users=JSON.parse(data);
//  console.log(users);
// })


///////////////////////////////////////////////////////Write File/////////////////////////
const users=require("./data.json")

//defining a data
let user={
  "name": "Smith",
     "age": 25,
     "language": ["PHP", "Go", "JavaScript"] 
}
users.push(user);
// STEP 3: Writing to a file
fs.writeFile("./users.json", JSON.stringify(data), err => {
  if(err) throw err;
  console.log("Done");

})