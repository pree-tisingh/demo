const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.headers);

  const path = req.url;
   
 
  let response;
  switch (path) {
    case '/home':
      response = 'Welcome home';
      break;
    case '/about':
      response = 'Welcome to About Us page';
      break;
    case '/node':
      response = 'Welcome to my Node Js project';
      break;
    default:
      response = 'Invalid URL';
  }

  res.end(response);
});

const PORT = 3000;
const HOST = '127.0.0.1';

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});
