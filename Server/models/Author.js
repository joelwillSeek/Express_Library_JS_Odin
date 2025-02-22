const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.Model;
const formatter = require("luxon");

const AuthorSchema = new Schema({
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
// Virtual for author "full" name.
AuthorSchema.virtual("nameFormated").get(function () {
  return this.family_name + ", " + this.first_name;
});

// Virtual for this author instance URL.
AuthorSchema.virtual("urlFormated").get(function () {
  return "/catalog/author/" + this._id;
});

AuthorSchema.virtual("lifespanFormated").get(function () {
  let lifetime_string = "";
  if (this.date_of_birth) {
    lifetime_string = DateTime.fromJSDate(this.date_of_birth).toLocaleString(
      DateTime.DATE_MED
    );
  }
  lifetime_string += " - ";
  if (this.date_of_death) {
    lifetime_string += DateTime.fromJSDate(this.date_of_death).toLocaleString(
      DateTime.DATE_MED
    );
  }
  return lifetime_string;
});

AuthorSchema.virtual("date_of_birth_yyyy_mm_dd").get(function () {
  return formatter.DateTime.fromJSDate(this.date_of_birth).toISODate(); // format 'YYYY-MM-DD'
});

AuthorSchema.virtual("date_of_death_yyyy_mm_dd").get(function () {
  return formatter.DateTime.fromJSDate(this.date_of_death).toISODate(); // format 'YYYY-MM-DD'
});

module.exports = mongoose.model("Author", AuthorSchema);
