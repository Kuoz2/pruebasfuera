const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/multikart-admin'));

app.get('/*', function (req, res) {
   res.setFile(path.join(__dirname + '/dist/multikart-admin/index.html'))
});


/*
//    origin: "http://localhost:4200",
var server = require('http').Server(app);
const io = require('socket.io')(server, {
  cors: {
    origin: "https://pruebasocketinject.herokuapp.com",
    methods: ["GET", "POST"],
    credentials: true,
    //transports: ['websocket', 'polling'],

  },
  allowEIO3: true
  
});
//    res.setHeader('Access-Control-Allow-Origin','http://localhost:4200');

app.use((req, res ,next) => {
    res.setHeader('Access-Control-Allow-Origin','https://pruebasocketinject.herokuapp.com');
    res.setHeader('Acces-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Acces-Contorl-Allow-Methods','Content-Type','Authorization');
    next();
})

//app.use(express.static(__dirname + '/dist/multikart-admin/index.html'))

io.on('connection', (socket) => {
   // socket.on('disconnect', () => {
     //   console.log('user disconnected');
     //});
const idHandShake = socket.id
const {nameRoom} = socket.handshake.query

console.log(`hola dispositivo ${idHandShake} --> ${nameRoom}`)

socket.join(nameRoom)
socket.on('event', (res) => {
  console.log(res)
  socket.emit('event',res);
  socket.to(nameRoom).emit('event', res);
})
socket.on('marcaEvnt', (res) => {
  console.log(res)
  socket.emit('marcaEvnt',res);
  socket.to(nameRoom).emit('marcaEvnt', res);
})
})
var port = process.env.PORT || 3000
server.listen(3000, () => {
    console.log("server conectado por el puerto 5000")
})
app.listen(process.env.PORT || 8080, () => {

  console.log(process.env.PORT)
});
*/

const PORT = process.env.PORT || 5000;
const INDEX = '/index.html';

const server = express()
  .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

  const io = socketIO(server);
  io.on('connection', (socket) => {
    console.log('Client connected');
    socket.on('disconnect', () => console.log('Client disconnected'));
  });

  app.listen(process.env.PORT || 8080, () => {

    console.log(process.env.PORT)
  });