const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const Model=mongoose.Model;

const newSchema=new Schema({
    name:String,
    url:String
});

module.exports=new Model("Genre");