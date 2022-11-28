const EventEmitter = require("events");
const event =new EventEmitter();
//register a listner
event.on("saySomething",()=>{
    console.log("My name is Navneet Kumar");
});
event.emit("saySomething");   