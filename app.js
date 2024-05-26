const express = require("express");
const mongoose = require("mongoose");
const mongodbConnection = require("./controllers/monogoConnection");
const Author = require("./models/Author");
const Book = require("./models/Book");
const userRoutes = require("./Routes/users");
const indexRoutes = require("./Routes/index");
const catalogRoutes = require("./Routes/catalog");
const compressed = require("compression");
const helmet = require("helmet");
const requestLimiter = require("express-rate-limit").rateLimit({
  windowMs: 1 * 60 * 1000, //1minute,
  max: 20,
});

const app = express();

const port = process.env.PROT || 3012;

app.set("view engine", "pug");
app.set("views", "./views");
app.use(compressed());
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      "script-src": ["'self'", "code.jquery.com", "cdn.jsdelivr.net"],
    },
  })
);
app.use(requestLimiter);
app.use(express.static("Public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/catalog", catalogRoutes);
app.use("/users", userRoutes);
app.use("/", indexRoutes);

app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
