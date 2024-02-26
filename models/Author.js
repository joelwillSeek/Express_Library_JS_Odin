const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const Model=mongoose.Model;

const newSchema=new Schema({
    first_name:{
        type:String,
    },
    family_name:String,
    date_of_birth:Date,
    date_of_death:Date,
    name:String,
    lifespan:String,
    url:String
})

module.exports =mongoose.model("Author",newSchema);