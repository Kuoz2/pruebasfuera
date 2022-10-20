
const express = require('express');
const path = require('path');
const app = express();
const Server  = require('http').Server(app);
const io =  require("socket.io")(Server, {
   cors: {
      origin: '*',
      credentials: true,
      method:['GET', 'POST']
   }
});
const { createAdapter } = require("@socket.io/postgres-adapter");
const { Pool } = require("pg");
const { Emitter } = require("@socket.io/postgres-emitter");

//adaptacino a la base de datos


app.use(express.static(__dirname + '/dist/multikart-admin'));

app.get('/*', function (req, res) {
   res.setFile(path.join(__dirname + '/dist/multikart-admin/index.html'))
});
//    origin: "http://localhost:4200",
//var server = require('http').Server(app);
//var server = require('http').createServer(app);
   //res.setHeader('Access-Control-Allow-Origin','*');

app.use((req, res ,next) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); 
    res.setHeader('Acces-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Acces-Contorl-Allow-Methods','Content-Type','Authorization');
    next();
})

const pool = new Pool(
   
   {
   user: "postgres",
   host: "localhost",
   connectionString: "postgres://pwrkxyiwtxxxae:73608ca4dc377cc17857923749436bd7e0cb19860e98fd5ce5a58674624221e2@ec2-54-204-148-110.compute-1.amazonaws.com:5432/dhgldkuecjs2q",
   password: "Krabe10251989",
   port: 5432,
   ssl: {
      rejectUnauthorized: false
    }
 });

io.on("connection", (socket) => {
   const i = []
   i.splice(0, i.length)
  console.log("conectado y escuchando", socket.id)
   socket.on('test', (a) => {
      console.log("estoy escuchando el test")
      pool.connect()
      pool.query(`select * from codes`, (err, result) =>  {
         console.log(result)
         for(let j of result.rows)
         {
            if(j.voucher_vendido == false){
               i.push(j)
            }
         }
        
         socket.broadcast.emit('test2', i)
         })

   })

   
 
})

app.set('port', process.env.PORT || 5000)
 Server.listen(app.get('port'), () => {
  console.log("hola", app.get('port'))
 
 })

//app.use(express.static(__dirname + '/dist/multikart-admin/index.html'))

//Socket segun un ejemplo

  