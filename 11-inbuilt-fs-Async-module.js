

// In node we can interact with our file systems using the fs module, something we couldn't do using Javascript
// language in the browser.

//There are two set-ups: 1-Synchronously(Blocking) and 2-Asynchronously(Non-blocking)


//Example 2:
//       ==> Using Asynchronously(Non-blocking):
// In here we use a call-back function(as a parameter on the module methods) that intakes two parameters( err and result) and 
// then we run the call-back when the functionality we are doing is complete.

const{ readFile, writeFile } = require("fs")

//  readFile("./fs folder/text.txt", "utf8", ( err,result ) => {
//      if(err){      
//          return;       //The if statement checks for erros and then returns No, the result allows us to have access to my data
//      }
//      console.log(result)
//  })


readFile("./fs folder/text.txt", "utf8", ( err,result ) => {

    if(err){      
        return;       //The if statement checks for erros and then returns No, the result alows us to have access to my data
    }

    const first = result; //this variable is given the data

    readFile("./fs folder/secondText.txt", "utf8", (err, result) => {

        if(err){      
            return;       //The if statement checks for erros and then returns No, the result allows us to have access to my data
        }
        
        const second = result;
        
        writeFile("./fs folder/secondNew.txt",
                `writeFile example of: ${second}, ${first}`,
                (err,result) =>{
                    if(err){
                        return;
                    }
                    console.log(result)
                }

        )
    })
})


