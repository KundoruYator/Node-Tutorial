


// We do not require to export this module to somewhere else in the Application since node exports it by wrapping
// it in the function. But remember to invoke the function as done in line 15!

const Num1 = 5

const Num2 = 10

function Add(){
    console.log(`The sum is: ${Num1 + Num2}`)
}

Add()

