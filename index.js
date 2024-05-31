const jsonServer = require("json-sever")
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port= process.eventNames.PORT || 4000

server.use(middlewares);
server.use(router);
server.listen(port);