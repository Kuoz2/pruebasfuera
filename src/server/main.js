var express = require('express');
var app = express();
var server = require('http').Server(app);
const io = require('socket.io')(server, {
  cors: {
    origin: "http://localhost:4200",
    methods: ["GET", "POST"],
    credentials: true,
    transports: ['websocket', 'polling'],

  },
  allowEIO3: true
  
});


app.use((req, res ,next) => {
    res.setHeader('Access-Control-Allow-Origin','http://localhost:4200');
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
/*15 a 1730
certificado de nacimiento del alumno
informe de certificado del jardin
dos fotos tamaño carnet con el nombre y el rut
fotocopia del carnet del apoderado
76 mil pesos impector luis rivera*/
