const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.Model;
const formatter = require("luxon");

const newSchema = new Schema({
  first_name: {
    type: String,
  },
  family_name: String,
  date_of_birth: Date,
  date_of_death: Date,
  name: String,
  lifespan: String,
  url: String,
});

newSchema.virtual("formatted_Date_Of_Birth").get(() => {
  return this.date_of_birth
    ? formatter.DateTime.fromJSDate(this.date_of_birth).toLocaleString(
        formatter.DateTime.DATETIME_MED
      )
    : "";
});

module.exports = mongoose.model("Author", newSchema);
