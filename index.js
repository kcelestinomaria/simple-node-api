const express = require("express");
const mongoose = require("mongoose");

const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");

const app = express();

// set up middleware to employ json
app.use(express.json());

// add support for entering form data
//app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API, Yeah We Made It!");
});

mongoose
  .connect(
    "mongodb+srv://celestino127:C0mpa$$i0n127@cluster0.5qsdpkx.mongodb.net/Simple-Node-API?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to the database!");
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch(() => {
    console.log("connection failed!");
  });
