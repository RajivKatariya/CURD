
const mongoose = require("mongoose");
const userSchema =new mongoose.Schema({
    fullname:{
        type:String
    },
    phone:{
        type:String
    },
    email:{
        type:String
    },
    pass:{
        type:String
    }
});

const userdata = new mongoose.model("studentlist",userSchema);
module.exports = userdata;

