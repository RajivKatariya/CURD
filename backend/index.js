const express =require('express');
const app = express();
const cors = require('cors');
const bodyparser = require('body-parser');

const mongoose = require('mongoose');
const studentModalVariable = require('./studentModal');
const myempmodal = require('./myemp');
const mongoDB = "mongodb://127.0.0.1:27017/nitish";
require("dotenv").config();
const PORT = parseInt(process.env.PORT) || 1000;

app.use(express.json());
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));

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
    name:'pooja singh',
    age:30,
    working:false,
    phone:999999999
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
});
const y = [
    {name:'ravi',age:20},
    {name:'ravi',age:50},
    {name:'ravi',age:30},
    {name:'ravi',age:40}
]

app.get('/students',function(req,res,next){
    // res.send(y);
    // res.json(y);
    // let p = mongoDB.studentmodalkeys.find().then((x)=>{
    //     res.json(p);
    // }).catch(next);
    mongoose.connection.db.collection('restaurants', function (err, collection) {
        if (err) throw err;
        collection.find({}).toArray(function (err, restaurants) {
          res.send(restaurants)
        });
      });

});

app.get("/data", async (req, res) => {
    const mongo = await connectMongo();
    const x = await mongo
     .db("mongodb://127.0.0.1:27017/nitish")
     .collection("myempcollections")
     .find({})
     .toArray();
    res.send(x);
   });


   



app.listen(PORT,()=>{
    console.log(`server is runing at ${PORT}`);
});