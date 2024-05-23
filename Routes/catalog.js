const express = require("express");
const router = express.Router();

const bookController = require("../controllers/BookController");
const bookInstanceController = require("../controllers/bookInstanceController");
const authorController = require("../controllers/authorController");
const genreController = require("../controllers/genreController");

router.get("/", bookController.index);

router.get("/books", bookController.getBookList);

router.get("/genre", genreController.getGenreList);

router.get("/authors", authorController.getAuthorList);

router.get("/bookinstances", bookInstanceController.getBookInstanceList);

module.exports = router;
