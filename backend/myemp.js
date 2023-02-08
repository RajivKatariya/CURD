const mongoose = require('mongoose');

const myemptype = new mongoose.Schema({
    name:{
        type:String
    },
    age:{
        type:String     
    },
    working:{
        type:Boolean
    },
    phone:{
        type:Number
    }

    // age:Number,
    // working:Boolean,
    // emial:String
});

const myempmodal = mongoose.model("myempcollection",myemptype);
module.exports = myempmodal;

