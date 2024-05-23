const express = require("express");
const router = express.Router();
const expressAsyncHandler = require("express-async-handler");
const Author = require("../models/Author");

exports.author_detail = expressAsyncHandler(async (req, res, next) => {
  // Get details of author and all their books (in parallel)
  const [author, allBooksByAuthor] = await Promise.all([
    Author.findById(req.params.id).exec(),
    Book.find({ author: req.params.id }, "title summary").exec(),
  ]);

  if (author === null) {
    // No results.
    const err = new Error("Author not found");
    err.status = 404;
    return next(err);
  }

  res.render("author_detail", {
    title: "Author Detail",
    author: author,
    author_books: allBooksByAuthor,
  });
});

exports.getAuthorList = expressAsyncHandler(async (req, res, next) => {
  const allAuthor = await Author.find().sort({ family_name: 1 }).exec();

  res.render("author_list", { title: "Author List", authorList: allAuthor });
});

module.exports = router;
