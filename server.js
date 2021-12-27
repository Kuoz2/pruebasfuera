const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/multikart-admin'));

app.get('/*', function (req, res) {
   res.setFile(path.join(__dirname + '/dist/multikart-admin/index.html'))
});

app.listen(process.env.PORT || 8080);

var server = require('http').Server(app);
const io = require('socket.io')(server, {
  cors: {
    origin: "https://pruebasocketinject.herokuapp.com/",
    methods: ["GET", "POST"],
    credentials: true,
    transports: ['websocket', 'polling'],

  },
  allowEIO3: true
  
});
app.use((req, res ,next) => {
   res.setHeader('Access-Control-Allow-Origin','https://pruebasocketinject.herokuapp.com/');
   res.setHeader('Acces-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
   res.setHeader('Acces-Contorl-Allow-Methods','Content-Type','Authorization');
   next();
})
app.use(express.static(__dirname))

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
server.listen(5000, () => {
   console.log("server conectado por el puerto 5000")
})