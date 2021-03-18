//Libraries
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

//Use method libs

const app = express();
require("dotenv").config();

//Midlewares

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());

//Database setup

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB "wtpmDatabase" DB connected!');
  });

//Routes Setup

app.use("/api/auth", require("./routes/auth"));
app.use("/api/plant", require("./routes/plant"));
app.use("/api/report", require("./routes/report"));
//Listen to port

const port = process.env.PORT;

app.listen(port, "0.0.0.0", () => {
  console.log(`WTPM server listening on port ${port}`);
});
