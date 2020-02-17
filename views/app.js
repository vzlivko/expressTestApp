const express = require("express");
const bodyParser = require("body-parser");
const product = require("../routes/product.route"); // Imports routes for the products
const app = express();
const mongoose = require("mongoose");
const dev_db_url =
  "mongodb+srv://admin:admin322@cluster0-yy1sj.mongodb.net/test?retryWrites=true&w=majority";
const mongoDB = process.env.MONGODB_URI || dev_db_url;

mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/products", product);

const port = 3000;

app.listen(port, () => {
  console.log("Server on port " + port);
});
