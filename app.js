const express=require("express");
const mongoose=require("mongoose");
const app=express();

const connection=mongoose.connect("mongodb://localhost:27017/Library");

connection.catch((err)=>{
    console.log(err);
})

app.set("view engine","ejs");

app.get("/",(req,res)=>{

    res.render("index");
})

app.listen(3001);