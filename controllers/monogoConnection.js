const mongoose = require("mongoose");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000, // Increase to 30 seconds
  socketTimeoutMS: 45000,
};

const forDevDatabaseUrl = "mongodb://localhost:27017/Library";
const forProductionDatabaseUrl = process.env.MONGODB_URI;

const mongodb = mongoose.connect(
  forProductionDatabaseUrl || forDevDatabaseUrl,
  options
);

mongodb.catch((err) => {
  console.log(err);
});

module.exports = mongodb;
