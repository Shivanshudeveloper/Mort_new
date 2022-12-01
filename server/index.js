const express = require("express");
const app = express();
const mongoose = require("mongoose");
const database = require("./config/key.js").mongoURI;
const cors = require("cors");
const bodyParser = require("body-parser");
const postRoute = require("./routes/postroute.js");
const getpostroute = require("./routes/getpostroute.js");
const editpostroute = require("./routes/editpostroute.js");
const deletepostroute = require("./routes/deletepostroute.js");
const xmldataPostroute = require("./routes/xmlpostroute.js");
// require("dotenv").config();
mongoose
  .connect(database, { useNewUrlParser: true })
  .then(() => {
    console.log("Database Connected Successfully");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/", postRoute);
app.use("/get", getpostroute);
app.use("/edit", editpostroute);
app.use("/delete", deletepostroute);
app.use("/xmldata", xmldataPostroute);

// const port = process.env.PORT;
try {
  app.listen(3300, (req, res) => {
    console.log("Server is Running");
  });
} catch (error) {
  console.log(error.message);
}

const db = mongoose.connection;
module.exports.db = db;
