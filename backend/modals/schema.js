
const mongoose = require("mongoose");
const userSchema =new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:Number
    }
});

const userdata = new mongoose.model("users",userSchema);
module.exports = userdata;

