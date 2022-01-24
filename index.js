const express=require('express');
const app=express();
const http=require('http');
const { hostname } = require('os');
const expressServer = http.createServer(app);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

const { Server } = require('socket.io');
const io = new Server(expressServer);


expressServer.listen(3000, () => { 
  
  console.log('listening on *:3000'); 
});
