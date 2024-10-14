

//NB: We also have the operating system(OS) module (a built-in module among many others), which provides many usefull... 
//    properties and methods for interacting with the operating system and the server !!

//NB:==>
//    *The General set-up for all built-in modules and even the external ones(although needed to be installed) is :

const exampleOs = require("os")//This set-up is for the os module but the syntax is same among other which can be destructured

//NB:The line above informs that we need to use the module(OS) in our application and access the methods and properties it has.
// Notice we do not require the (./) thing inside the require function like a normal module in our directory!

// Example 1 ==>
//     Where OS module is used;
//            *A method (module.userInfo()) to getInfo about this laptop's user we say?

const user = exampleOs.userInfo()
console.log(user)

//In here above,the in-built module(os) assigned to exampleOs is assigned to a variable(user) and we place after the fullstop..
//the invoked method( userInfo() ) which is one of the methods examples OS module has.And when run,i get the user's info.

//Example 2 ==>
//             *A method that returns the systems uptime in seconds?

console.log(`The system's uptime is: ${exampleOs.uptime()} seconds`)

//Example 3 ==>
//             *Other few examples of the OS in-built module methods include:

const otherMethods = {
    Name:exampleOs.type() ,
    Release:exampleOs.release() ,
    totalMemory:exampleOs.totalmem() ,
    freeMemory:exampleOs.freemem() ,
}

console.log(otherMethods)
                           