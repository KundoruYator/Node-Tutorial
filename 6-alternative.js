
// const items = ["Thing 1", "Thing 2"]

// const person = {
//     name:"Bobby"
// }

// module.exports = {items, person}

//instead of the above i can say;

module.exports.items = ["Thing 1", "Thing 2"]

const person = {
     name:"Bobby",
}

module.exports.singlePerson = person