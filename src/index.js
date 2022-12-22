const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require("body-parser");
const route = require('./routers/route')
const app = express();
const port = 3000;

app.use(bodyparser.json());

mongoose.connect("mongoDB link to connect")
.then(()=>{
    console.log("mongo db is connected")
}).catch((err)=>{
    console.log(err)
})

app.use('/', route)

app.listen(port , ()=>{
    console.log('listening the port at ',port)
})