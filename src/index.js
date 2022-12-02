const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

require("./socket.js")(io,app)

app.use(express.static(__dirname + '/public'));

server.listen(process.env.PORT || 3000, () => {
  console.log('Escuchando en el puerto :3000');
});