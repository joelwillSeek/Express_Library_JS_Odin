const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.Model;
const luxon = require("luxon");

const newSchema = new Schema({
  imprint: String,
  status: Object,
  due_back: Date,
  url: String,
});

newSchema.virtual("due_date_formatted").get(() => {
  return luxon.DateTime.fromJSDate(this.due_back).toLocaleString(
    luxon.DateTime.DATETIME_MED
  );
});

module.exports = mongoose.model("BookInstance", newSchema);
