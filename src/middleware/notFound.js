const express = require("express");
const app = express();

const notFound = app.use((req, res, next) => {
  res.type("application/json");
  res.status(404).send("404 - Not Found");
  next();
});

module.exports = notFound;
