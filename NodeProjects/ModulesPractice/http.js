const http = require('http');

//Assigning a method called create server to variable 
//The createServer() method expects a call back function
//The first parameter in the call back function is request object(incoming request to the server, such as webpage file or data)
//The second parameter is response object(which is what we are sending back to the client)
const server = http.createServer(function(req,res){
    // console.log(req);
    if(req.url==='/'){
        return res.end('Hello World')
    }

    if(req.url==='/about'){
       return res.end("Here's our history")
    }
     return res.end(`
        <h1>Oops</h1>
        <p>We can't seem to find the page</p>
        <a href= '/'>Back Home</a>
     `);
})


//Using the server variable we just set up we are using a method
//called listen to set up what port the server is listening on.
server.listen(3000);

// 1.require http module
// 2.assign http.createServer method to variable(using server as the variable name reduces confusion)
// 3.set call listen method with server object to have the server listen on a port