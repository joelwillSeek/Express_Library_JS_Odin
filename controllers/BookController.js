const expressAsyncHandler = require("express-async-handler");
const Book = require("../models/Book");
const BookInstance = require("../models/BookInstance");
const Author = require("../models/Author");
const Genre = require("../models/Genre");

module.exports.index = expressAsyncHandler(async (req, res, next) => {
  let [
    numBooks,
    numBookInstances,
    numAvailableBookInstances,
    numAuthors,
    numGenres,
  ] = await Promise.all([
    Book.countDocuments({}).exec(),
    BookInstance.countDocuments({}).exec(),
    BookInstance.countDocuments({ status: "Available" }).exec(),
    Author.countDocuments({}).exec(),
    Genre.countDocuments({}).exec(),
  ]);

  res.render("index", {
    title: "Local Library Home",
    book_count: numBooks,
    book_instance_count: numBookInstances,
    book_instance_available_count: numAvailableBookInstances,
    author_count: numAuthors,
    genre_count: numGenres,
  });
});

//how do i assign author's id to book
module.exports.getBookList = expressAsyncHandler(async (req, res, next) => {
  const allBooks = await Book.find({}, "title author url")
    .sort({ title: 1 })
    .populate("author")
    .exec();

  // console.log(allBooks, "hi");
  res.render("book_list", { title: "Book List", book_list: allBooks });
});

// Display detail page for a specific book.
exports.book_detail = expressAsyncHandler(async (req, res, next) => {
  // Get details of books, book instances for specific book
  const [book, bookInstances] = await Promise.all([
    Book.findById(req.params.id).populate("author").populate("genre").exec(),
    BookInstance.find({ book: req.params.id }).exec(),
  ]);

  if (book === null) {
    // No results.
    const err = new Error("Book not found");
    err.status = 404;
    return next(err);
  }

  res.render("book_detail", {
    title: book.title,
    book: book,
    book_instances: bookInstances,
  });
});

// Display detail page for a specific BookInstance.
