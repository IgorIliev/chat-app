const path = require('path');
const http = require('http');
const express = require('express');
const socketIO=require('socket.io');

const {generateMessage} = require('./utils/message');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('nov korisnik');

      socket.emit('newMessage', generateMessage('Admin', 'dobrodojde'));

    socket.broadcast.emit('newMessage', generateMessage('Admin', 'nov korisnik'));

  socket.emit('hello');
  socket.broadcast.emit('new user');


  socket.on('createMessage', (message) => {
    console.log(`createMessage from ${message.from}: ${message.text}`);
    io.emit('newMessage', generateMessage(message.from, message.text));
  });

  socket.on('disconnect', () => {
    console.log('korisnikot se otkaci');
  });

});



server.listen(port, () => {
  console.log(`Started up at port ${port}`);
});
