const express =require('express');
const app = express();
const mongoose = require('mongoose');
const studentModalVariable = require('./studentModal');
const myempmodal = require('./myemp');
const mongoDB = "mongodb://127.0.0.1:27017/nitish";
require("dotenv").config();
const PORT = parseInt(process.env.PORT) || 1000;

mongoose.set('strictQuery', false);

mongoose.connect(mongoDB,(err)=>{
    if(err)
    {
        console.log("this is error");
    }
    else{
        console.log("this is ok");
    }
})

// studentModalVariable({
//     name:'pankaj singh',
//     phone:89657457
// }).save((err,mydata)=>{
//     if(err){
//         console.error(err.message);
//     }
//     else{
//         console.log(`save data success fully ${mydata}`);
//     }
// })

myempmodal({
    name:'kumar singh',
    age:50,
    working:true,
    phone:545454545
}).save((errordata,resultdata)=>{
    if(errordata)
    {
        console.log(errordata);
    }
    else{
        console.log(`data insert successfully ${resultdata}`);
    }
})


app.get('/about',(req,res)=>{
    res.send("hi");
    

})




app.listen(PORT,()=>{
    console.log(`server is runing at ${PORT}`);
});