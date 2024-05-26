const mongoose = require("mongoose");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000, // Increase to 30 seconds
  socketTimeoutMS: 45000,
};

const mongodb = mongoose.connect("mongodb://localhost:27017/Library", options);

mongodb.catch((err) => {
  console.log(err);
});

module.exports = mongodb;
