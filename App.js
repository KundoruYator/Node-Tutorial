

// npm -- global command, comes with node is:
//     npm --version

// local dependency -- use it only in this particular project
//      npm i <packageName>

// Global dependency -- use it in any project:
//      npm install -g <packageName>
//      sudo npm install -g <packageName> for (mac)

// Dev dependency -- Used while in the process of developing the application then the global dep is released with the app
//      npm i <packageName> -D


// package.json - manifest files (store important info about project/package)'
// manual approach (create package.json in the root , create properties e.t.c)
// npm init (step by step , press enter to skip)
// npm init -y (everything default)

//REMEMBER: *package or dependency or module is used to refer to the same thing
//          *Also when i install a dependency, a new folder(node_modules) appears on my directory which holds all the 
//           dependency i require and also other packages the dependencies rely on.



//First install the lodash package by consoling npm i lodash to install it.
const _ = require('lodash') // General setup for installed dependancies.

const items = [1 , [2, [3, [4]]]]

const newItems = _.flattenDeep(items)

console.log(newItems)

// Since i can create a repo on my github, i can push the rest of the files on my directory except the ./node_modules by using
// .gitignore Hence:
//                 *First initializing Git by commanding (git init)
//                 *Then putting the rest of the files by commanding(git add .)
//                 *then commit by commanding (git commit -m "first commit") 

console.log("Kundoru INC.")