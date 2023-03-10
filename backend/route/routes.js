const express = require("express");
const bcrypt = require("bcryptjs");
const users = require("../models/myschma");
const router = express.Router();
const authenticat = require("../mediaware/authenticat");




/*create or post api */
router.post("/reg", async(req,res)=>{
    const {name,phone,email,pass,cpass} = req.body;
    const adduser = new users({
        name,phone,email,pass,cpass
    });
        // await adduser.save();
        // return res.status(400).json(adduser);
        // console.log(adduser);

    if(!name || !phone || !email || !pass || !cpass)
    {
        return res.status(400).json({error:"fill all details"});
    }
    try{
        const  oldemail = await users.findOne({email:email});
        if(oldemail)
        {
            res.status(400).json({error:"email allrady entered"});
        }else{
            const adduser = new users({
                name,phone,email,pass,cpass
            });
                await adduser.save();
                res.status(201).json(adduser);
                console.log(adduser);
        }
    }catch(error)
    {

    }


    
});


/* get all data api 1 */
router.get("/getdata",async(req,res)=>{
    const adduser = await users.find();
    res.json(adduser);
    console.log(adduser);
});


/*get single data api */
router.get("/view/:id",async(req,res)=>{
    console.log(req.params);
    const {id} = req.params;
    const singleuser = await users.findById({_id:id});
    console.log(singleuser);
    res.status(201).json(singleuser);

});


/*update api */
router.patch("/updaterecord/:id",async(req,res)=>{
    const {id} = req.params;
    const recordupdate = await users.findByIdAndUpdate(id,req.body,{new:true});
    console.log(recordupdate);
    res.status(201).json(recordupdate);
});


/* for delete api*/
router.delete("/deleterecord/:id",async(req,res)=>{
    const {id} = req.params;
    const a = await users.findByIdAndDelete({_id:id})
    console.log(a);
    res.status(201).json(a);
});


router.post("/login", async(req,res)=>{
    console.log(req.body);
    const {email,pass} = req.body;
      
    if(!email || !pass){
        return res.status(422).json({error:"user and password dont match"});
       
    }
    try{
        const uservalidation = await users.findOne({email:email});
        if(uservalidation){
            const mathdata = await bcrypt.compare(pass,uservalidation.pass);
            console.log(mathdata);
            if(!mathdata){
                res.status(422).json({error:"password not match"});
            }else{
                //token generate after successful find data
                    const token = await uservalidation.customgeenratefunction();
                // cookies generate
                    res.cookie("usecookie",token,{
                        expires:new Date(Date.now()+9000000),
                        httpOnly:true
                    });
                    const result = {
                        uservalidation,
                        token
                    }
                    return res.status(201).json({status:201,result});
                    
            }
        }
    } catch(error)
    {}
    
});



// user validation
router.get("/validuser",authenticat,async(req,res)=>{
    // console.log("show this message after done authenticat varification");
    try{
        const firsttimevalid = await users.findOne({_id:req.userId});
        res.status(201).json({status:201,firsttimevalid});
    }
    catch(error)
    {
        res.status(401).json({status:401,error})
    }


});



module.exports = router;