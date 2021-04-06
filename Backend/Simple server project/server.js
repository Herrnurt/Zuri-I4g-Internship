const http = require('http');


// A server created with the HTTP variable

const server = http.createServer(function(req, res)
{

// Header created
res.writeHead(200, {'Content-Type': 'text/html'});

// Some Information sent back
//res.end("welcome to Zuri internship");
// res.end(`
//{
//   "name" : "Oladipo Bolaji",
//   "College": "Uniben",
//   "Occupation": "Software Developer"
//}`)
res.end (`
<html>
    <body style="background:indigo; text-align:center; color:white">

        <h1> Welcome to Node.js Class</h1>
        <p> How are you doing Mr Ebuka</p>
    </body>

</html>
`)
});

// A port created
server.listen(4000, `127.0.0.1`);

console.log("Yes, you have created a server!");