const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const model=mongoose.Model;

const book=new Schema({
    title:String,
    author:String,
    summary:String,
    ISBN:String,
    url:String,
    genre:Schema.Types.ObjectId
})

module.exports=mongoose.model("Book",book);