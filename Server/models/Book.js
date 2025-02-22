const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const book = new mongoose.Schema({
  title: String,
  author: Schema.Types.ObjectId,
  summary: String,
  ISBN: String,
  url: String,
  genre: Schema.Types.ObjectId,
});

module.exports = mongoose.model("Book", book);
