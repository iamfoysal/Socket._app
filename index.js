const { time } = require('console');
const { TIMEOUT } = require('dns');
const express=require('express');
const app=express();
const http=require('http');
const { hostname } = require('os');
const expressServer = http.createServer(app);



const { Server } = require('socket.io');
const io = new Server(expressServer);

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

expressServer.listen(5000, () => {
  console.log('serverRun  *:5000');
});