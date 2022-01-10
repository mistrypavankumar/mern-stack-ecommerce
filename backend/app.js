const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");
const cookiesParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

app.use(express.json());
app.use(cookiesParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

// all routes imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);

// Middleware for Errors Handling.
app.use(errorMiddleware);

module.exports = app;
