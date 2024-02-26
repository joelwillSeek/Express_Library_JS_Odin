const mongoose= require("mongoose");

const mongodb=mongoose.connect("mongodb://localhost:27017/Library");

mongodb.catch((err)=>{
    console.log(err);
})

module.exports=mongodb;