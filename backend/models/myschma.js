const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String
        
    },
    phone:{
        type:Number
    },
    email:{
        type:String
    }
});

const users = new mongoose.model("users",userSchema);
module.exports = users;