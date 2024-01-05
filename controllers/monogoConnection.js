const monagodb=mongoose.connect("mongodb://localhost:27017/Library");

monagodb.catch((err)=>{
    console.log(err);
})

module.exports={monagodb}