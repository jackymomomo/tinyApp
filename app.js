const http = require("http");
const PORT = 8080;

// a function which handles requests and sends response
const requestHandler = function (request, response) {
  if(request.url === '/'){
    response.end('welcome')
  } else if (request.url === '/urls'){
    response.end('https://www.youtube.com')
  } else {
    response.statusCode = 404
    response.end('ERROR 404 SORRY')
  }
};

const server = http.createServer(requestHandler);
console.log("Server CREATED") 

server.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});

console.log('LAST LINE (after .listen call)')
