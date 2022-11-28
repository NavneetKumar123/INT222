const chalk=require("chalk");
const validate= require("validator");
const res =validator.isEmail("navneetcool20@gmail.com");
console.log(res ? chalk.green.inverse(res) : chalk.red)