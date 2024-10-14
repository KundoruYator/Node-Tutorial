


//NB:==>

// Node uses commonjs and not ES6, also,every file in the directory is a module(by default)!!
// Modules - Is encapsulated code (only share minimum= Meaning we share what we want, 
//           and leave behind what we don't want to share!!)


// NB: ==>

// Using Modules as a global, we are able to sepparate the variable names, and the sayName function and even future functions
// in sepparate files! and we can access them all throughout the application using the (require) function. That way we can have 
// smaller files and more structure to our application!!!

//Challenge:==>

//     *Using the below code, place the variable Secret,John and Peter in a (4-names.js) file and also the 
//      sayName function placed in a (5-Util.js) file.
//     *Then using the Module global, export it back here by importing it using the require global function.
//      But remember to leave behind the secret variable as module global can do so!          

// The Code is here below:==>

//        const secret = "SUPER SECRET" 
//        const John = "John"
//        const Peter = "Peter"

//        const sayName = (name) =>{
//            console.log(`My name is ${name}`)
//        }

//        sayName("Susan")
//        sayName(John)
//        sayName(Peter)

// END OF ABOVE CODE.

// Solution :==>
//            *To import the exported modules that i wanted to share i would say:

const names = require("./4-names")  //for the John and Peter variables

const theFunction = require("./5-utils") //for the sayName function

const Data = require("./6-alternative") // For the Array and object
console.log(Data)

require("./7-single") //For the Add function....we did not need a variable here!This is bcz we have an invoked function 
//                      on line 15 in the (7-single.js) file!


theFunction("Susan")

theFunction(names.John)
theFunction(names.Peter)