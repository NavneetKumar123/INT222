// const bioData = {
//     name:"Navneet",
//     id:1234456,
//     employess:"LPU"
// }
// const json = JSON.stringify(bioData);
// const objData = JSON.parse(json);
// console.log(objData);
const fs = require("fs");
fs.readFile("json2.json","utf-8",(err,data)=>{
    const org = JSON.parse(data);
    console.log(data);
    console.log(org)
})