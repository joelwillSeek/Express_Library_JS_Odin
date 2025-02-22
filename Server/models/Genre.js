const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.model;

const newSchema = new Schema({
  name: String,
});

newSchema.virtual("url").get(function () {
  return "/catalog/genre/" + this._id;
});

module.exports = Model("Genre", newSchema);
