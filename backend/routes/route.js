
const express = require("express");
const userdata = require("../modals/Schema");
const router = express.Router();

/*create or post api */
router.post("/regs", async(req,res)=>{
    const {fullname,email,phone,pass} = req.body;
    const adduser = new userdata({
        fullname,email,phone,pass
    });
        await adduser.save();
        // return res.status(400).json(adduser);
        console.log(adduser)
});


/* get api*/
router.get("/getdata", async(req,res)=>{
    const adduser = await userdata.find();
    res.json(adduser);
    console.log(adduser);
});


/* delete api*/
router.delete("/deletecurrentrecord/:id", async(req,res)=>{
    const {id} = req.params;
    const a = await userdata.findByIdAndDelete({_id:id})
    console.log(a);
    res.status(201).json(a);
});



/*get single data api */
router.get("/view/:id",async(req,res)=>{
    console.log(req.params);
    const {id} = req.params;
    const singleuser = await userdata.findById({_id:id});
    console.log(singleuser);
    res.status(201).json(singleuser);

});



/*update api */
router.patch("/updaterecord/:id",async(req,res)=>{
    const {id} = req.params;
    const recordupdate = await userdata.findByIdAndUpdate(id,req.body,{new:true});
    console.log(recordupdate);
    res.status(201).json(recordupdate);
});


module.exports = router;