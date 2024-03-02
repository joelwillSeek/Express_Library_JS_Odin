const express = require("express");
const mongoose = require("mongoose");
const mongodbConnection = require("./controllers/monogoConnection");
const Author = require("./models/Author");
const Book = require("./models/Book");
const ObjectsData = require("./controllers/Routes/ObjectsData");

const app = express(); 

app.set("view engine","ejs");
app.set("views","./views");

app.use("/catalog",ObjectsData);

app.get("/",(req,res)=>{
  res.redirect("/catalog"); 
});

app.listen(3005);
 