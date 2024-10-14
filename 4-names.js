

// LOCAL => To be left behind, hence not exported. 

//      const Secret = "SUPER SECRET!"

// SHARE => to be exported to the rest of the application

//      const John = "John"
//      const Peter = "Peter"

//      console.log(module);

// NB:=> Using the Above code;

//     *Remember if i console.log(module) global, in the above code, and command the (node 4-names.js) in the terminal,
//      it will show an object (module) with properties, but we will focus on the (module.exports) property, since it tells...
//      us that the (module.exports) property is an object!(An object inside an object), since it's value is an object.
//      This enables us to place any variables in above code, inside our object.propery variable kinda ( module.export = {} ) 
//      variable and export it anywhere in our application! and also... leave the one we don't want to export (Secret variable).

// To export the ones that i want to share to the rest of the Application, i will say :=>

const Secret = "SUPER SECRET!"

const John = "John"
const Peter = "Peter"

module.exports = { John , Peter } //In ES6 we would have used export default, but remember in node common js is used!
//                                  Also we placed the variables inside the {} tags since there are more than one.

//NB:
//   * I can have an alterative where i say;
//          module.exports.John = "John"
//          module.exports.peter = "Peter"