const express = require("express");
const mongoose = require("mongoose");
const mongodbConnection = require("./controllers/monogoConnection");
const Author = require("./models/Author");
const Book = require("./models/Book");
const userRoutes = require("./Routes/users");
const indexRoutes = require("./Routes/index");
const catalogRoutes = require("./Routes/catalog");

const app = express();

const port = 3011;

app.set("view engine", "pug");
app.set("views", "./views");
app.use(express.static("Public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/catalog", catalogRoutes);
app.use("/users", userRoutes);
app.use("/", indexRoutes);

app.listen(port, () => {
  console.log("Server started on port " + port);
});
