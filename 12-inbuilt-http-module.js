
const exampleHttp = require("http"); // http module set-up


// createServer() method which looks for a callback function, that intakes two parameters,(req,res)
// where the first parameter rep the incoming request while the other is what we are sending back.

//if i console.log(req) it'll return a large object but we'll focus on the url property

const Server = exampleHttp.createServer( (req,res) => { 

    if(req.url === "/") {  // "/" meaning => The homepage. hence if the homepage is being requested by a person the res would be the respond
        res.end("My first respond")
    } 
    
    if(req.url === "/About") { // "/About" meaning => The About page.
        res.end("Here is our short History.....")
    }

    // res.end() //This is where we encode when the user searches for an unexising page or an error.
    res.end(`
        <h1>Opps!</h1>
        <p>Seems like we can't find the page you are looking for!</p>
        <a href="/"> Homepage </a>
    `)

} )

Server.listen(5000)  //this tells which port our variable(server) is istening to.
//                     And when i go to a browser and insert localhost:5000 i'll see a page written "my first respond"
//                     And when i insert localhost:5000/About i'll see "Here is our short History"
//                     And when i insert localhost:5000/error i'll see lines 23 to 25.