const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.Model;
const luxon = require("luxon");

const BookInstanceSchema = new Schema({
  imprint: String,
  status: Object,
  due_back: Date,
  url: String,
  book: { type: Schema.Types.ObjectId, ref: "Book", required: true },
});

// Virtual for this bookinstance object's URL.
BookInstanceSchema.virtual("urlFormatted").get(function () {
  return "/catalog/bookinstance/" + this._id;
});

BookInstanceSchema.virtual("due_back_formatted").get(function () {
  return luxon.DateTime.fromJSDate(this.due_back).toLocaleString(
    DateTime.DATE_MED
  );
});

BookInstanceSchema.virtual("due_back_yyyy_mm_dd").get(function () {
  return luxon.DateTime.fromJSDate(this.due_back).toISODate(); //format 'YYYY-MM-DD'
});

module.exports = mongoose.model("BookInstance", BookInstanceSchema);
