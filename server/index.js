const express =require('express')
const app=express()




const cors=require("cors")
app.use(cors())
const http=require("http")
const {Server}=require('socket.io')
const server=http.createServer(app)
require("dotenv").config();


const mongoose=require('mongoose');
const conn=require('./db/conn.js')
const users=require('./models/userSchema')

const router=require('./routes/routes')

const port=process.env.PORT;
app.use(cors())
app.use(express.json())
app.use(router)


server.listen(port,()=>{
    console.log("Server is running hello")
  
})
