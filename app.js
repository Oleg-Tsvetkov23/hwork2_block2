require("reflect-metadata");

const express = require("express");
require('dotenv').config()
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const errorMiddleware = require("./middleware/error")

const booksRouter = require("./routers/routes");

require("./db_connection");
require("./container");

const app = express();
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/books", booksRouter);

app.use(errorMiddleware)

const listener = app.listen(8080, function () {
  console.log("Listening on port " + listener.address().port);
});
