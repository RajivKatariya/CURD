const express = require("express");
const users = require("../models/myschma");
const router = express.Router();



router.post("/reg", async(req,res)=>{

    const {name,phone,email} = req.body;

    const adduser = new users({
        name,phone,email
    });
    await adduser.save();
    res.status(201).json(adduser);
    console.log(adduser);
});



router.get("/getdata",async(req,res)=>{
    const adduser = await users.find();
    res.json(adduser);
    console.log(adduser);
});



router.get("/view/:id",async(req,res)=>{
    console.log(req.params);
    const {id} = req.params;
    const singleuser = await users.findById({_id:id});
    console.log(singleuser);
    res.status(201).json(singleuser);

});



router.patch("/updaterecord/:id",async(req,res)=>{

    const {id} = req.params;
    const recordupdate = await users.findByIdAndUpdate(id,req.body,{new:true});
    console.log(recordupdate);
    res.status(201).json(recordupdate);
});


router.delete("/deleterecord/:id",async(req,res)=>{

    const {id} = req.params;
    const a = await users.findByIdAndDelete({_id:id})
    console.log(a);
    res.status(201).json(a);
});



module.exports = router;