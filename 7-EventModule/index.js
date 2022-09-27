
const EventEmitter = require('events');
const event = new EventEmitter();
//  Example 1 : Registering an event to be fired only once time
//  Example 2 : Registring an event with multiple call backs
//  Example 3 : Registring an event with prameters
// Now listening the event or firing


event.on("sayMyName",()=>{
    console.log("First Name : Malik");
});

event.on("sayMyName",()=>{
    console.log("Sur Name : Waqas");
});

event.on("sayMyName",()=>{
    console.log("Last Name : Ali");
});

event.emit('sayMyName'); //creating event

// Event with parameters


event.on("bioData",(Name,Reg,CGPA)=>{
    console.log(`Name : ${Name}, Reg#: ${Reg}, CGPA : ${CGPA}`);
});



event.emit("bioData",'waqas','SP20-BCS-020',2.56);

