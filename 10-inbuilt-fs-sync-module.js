


// In node we can interact with our file systems using the fs module, something we couldn't do using Javascript
// language in the browser.

//There are two set-ups: 1-Synchronously(Blocking) and 2-Asynchronously(Non-blocking)

//Example 1:
//        ==> Using 1-Synchronously(Blocking) :

const{ readFileSync, writeFileSync } = require("fs") // We have destructured out of fs module, the two methods.In that we don't..
// need to place { const text = exampleFs.readFileSync("./fs folder/text.txt","utf8") } on line (21), since we did not set up the...
// fs module... as { const exampleFs = require("fs") } on line 12


// readFileSync() enables to read from the file system.We need to provide two parameters(a path to that specific file and ...
// "utf" encoding)
// writeFileSync() enables us to create new file.We need to provide two parameters(the file name and the value i want to pass)

const text = readFileSync("./fs folder/text.txt","utf8")//Notice in here we used the(./) since we are indicating the path needed
// to be found first b4 being read in the console.
console.log(text)

writeFileSync( "./fs folder/new.txt",`
    writeFileSync example of: ${text}`,
    { flag:'a' }
 )  //it created a new file(new.text), with a value of "writeFileSync example of ${text}."

