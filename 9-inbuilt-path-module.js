

// In node we can interact with our file paths using the path module, something we couldn't do using Javascript
// language in the browser.

const examplePath = require("path")

//Example 1:
//         *Using separrator property(module.sep) that returns my platforms specific sepparator:

console.log(examplePath.sep) // My platform will return a back-slash as it's specific sepparator.

//Example 2:
//         *Using join method(module.join()) that joins a sequence of path segments using my platforms specific seppartor..
//          as the limiter and also secondly it returns a normalized resulting path. And to show this clearly, i created a folder 
//          (pather) with a subfolder(2-pather) that has a text file

const filePath = examplePath.join("/pather", "2-pather", "text.txt")//Need to pass the paths as strings.Notice (/) instead of (./)
console.log(filePath)

//Example 3:
//         *Using basename method to get the last file in the file path.

const specificPath = examplePath.basename(filePath)
console.log(specificPath)

//Example 4:
//         *Using resolve method which returns an absolute path!

const AbsolutePath = examplePath.resolve(__dirname,"pather","2-pather","text.txt") // The resolve method takes two arguments...
// 1- The global module(__dirname) 2-The file path as in the directory.
console.log(AbsolutePath)

console.log(__dirname); //Just to see the difference with using the resolve method of path module.
