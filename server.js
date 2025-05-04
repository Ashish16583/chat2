const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const port = 3001;


app.use(express.static(__dirname));

let messages = [];

io.on('connection', (socket) => {
  console.log('A user connected');
  socket.emit('loadMessages', messages);

  socket.on('newMessage', (message) => {
    messages.push(message);
    io.emit('newMessage', message);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
