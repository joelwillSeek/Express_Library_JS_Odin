const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.model;

const newSchema = new Schema({
  name: String,
  url: String,
});

module.exports = Model("Genre", newSchema);
