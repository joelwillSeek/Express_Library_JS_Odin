const express = require("express");
const mongoose = require("mongoose");
const mongodbConnection = require("./controllers/monogoConnection");
const Author = require("./models/Author");
const Book = require("./models/Book");

const app = express();

let createAuthor = () => {

  /**
   * @type {mongoose.Model}
   */
  const author = new Author({ first_name: "hi",family_name:"there" });
  author.save();
};

let createBook=()=>{
    const book=new Book({title:"Atomic Habits"});
    book.save();
}

createAuthor();
createBook();

app.listen(3005);
 