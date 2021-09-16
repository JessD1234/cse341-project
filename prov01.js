const http = require('http');
const provOneRoutes = require('./prove01-routes');

const server = http.createServer(provOneRoutes);


server.listen(3000);