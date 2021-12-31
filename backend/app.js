const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");

// all routes imports
const product = require("./routes/productRoute");

app.use(express.json());
app.use("/api/v1", product);

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;
