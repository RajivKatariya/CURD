const express = require("express");
const mongoose = require('mongoose');
require('dotenv').config();
const port = process.env.port || 4000;
require('./database/Connection');




const app = express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("this is text10");
})

app.get("/about",(req,res)=>{
    res.send("this is about page");
})

app.post("/reg", async(req,res)=>{
    console.log(req.body.name);
    
});
    
    





app.listen(port,()=>{
    console.log(`port is runing at${port}`);
})