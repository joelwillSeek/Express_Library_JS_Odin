const express=require("express");
const mongoose=require("mongoose");
const mongodbConnection=require("./controllers/monogoConnection");

const app=express();

const mongodb=

app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("index");
})

app.listen(3001);