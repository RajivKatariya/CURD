require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000
const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

require("./db/connect");
const users = require("./models/myschma");
const cors = require("cors");
const router = require("./route/routes");

app.use(cors());
app.use(express.json());
app.use(router);






app.listen(PORT,()=>{
    console.log(`server is start at ${PORT}`);
})