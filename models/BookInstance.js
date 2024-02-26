const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const Model=mongoose.Model;

const newSchema=new Schema({
    imprint:String,
    status:Object,
    due_back:Date,
    url:String
})

module.exports=mongoose.model("BookInstance",newSchema);