const mongoose = require("mongoose");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000, // Increase to 30 seconds
  socketTimeoutMS: 45000,
};

const forDevDatabaseUrl = "mongodb://localhost:27017/Library";
const forProductionDatabaseUrl =
"mongodb+srv://eyoelsel:eyhacker@kinda.plmti40.mongodb.net/?retryWrites=true&w=majority&appName=kinda";

const mongodb = mongoose.connect( 
  forDevDatabaseUrl,
  ///forProductionDatabaseUrl || forDevDatabaseUrl,
  options
);

mongodb.catch((err) => {
  console.log(err);
  process.exit(1);
});

module.exports = mongodb;
