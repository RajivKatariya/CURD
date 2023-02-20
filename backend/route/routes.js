const express = require("express");
const users = require("../models/myschma");
const router = express.Router();



router.post("/reg", async(req,res)=>{

    const {name,phone} = req.body;

    const adduser = new users({
        name,phone
    });
    await adduser.save();
    res.status(201).json(adduser);
    console.log(adduser);

});



module.exports = router;