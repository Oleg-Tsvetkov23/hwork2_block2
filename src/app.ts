import "reflect-metadata";
import "dotenv/config";

import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

const errorMiddleware = require("../middleware/error");
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
  console.log("Listening on http://localhost:8080");
});
