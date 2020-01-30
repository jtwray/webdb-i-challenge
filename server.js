const express = require('express');
const helmet = require('helmet');
const cors = require('cors');


const accountsRouter=require('./accounts/account-router')

const server = express();
server.use(express.json());

server.use(helmet());
server.use(cors());

server.use('/accounts/',accountsRouter);


server.get('/',(req,res)=>{
    res.send("¡Server's Up Amigo!");
});
module.exports = server;