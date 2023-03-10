const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const keysecret = "sjkdfksjkjfksjdkfdskjfhsdjf";

const userSchema = new mongoose.Schema({
    name:{
        type:String  
    },
    phone:{
        type:Number
    },
    email:{
        type:String
    },
    pass:{
        type:String
    },
    cpass:{
        type:String
    },
    tokens:[
        {
            token:{
                type:String,
                require:true,
            }
        }
    ]
});


//hass password
userSchema.pre("save", async function(next){
    if(this.isModified("pass")){
        this.pass = await bcrypt.hash(this.pass,12);
        this.cpass = await bcrypt.hash(this.pass,12);
    }
    next();
});

userSchema.methods.customgeenratefunction = async function(){
    try{
        let mytoken = jwt.sign({_id:this._id},keysecret,{
            expiresIn:"1d"
        });
        this.tokens = this.tokens.concat({token:mytoken});
        await this.save();
            return mytoken;

    }
    catch(error){
        res.statis(422).json(error);
    }

}




const users = new mongoose.model("users",userSchema);

module.exports = users;