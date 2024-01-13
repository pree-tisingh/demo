const http = require('http');

const server = http.createServer((req, res) => {
    console.log("My Name is Preeti Singh");
});

server.listen(4000, () => {
    console.log('Server is running on port 4000');
});
