let http = require('http');
const app =require ('./app');

const port = process.env.port || 3000;

//Create server with exported express app
const server = http.createServer(app);
server.listen(port);
