const express = require("express");
const morgan = require("morgan");

const app = express();

const authRoute = require("../src/Routes/authRoute");

//MIDDLEWARE
app.use(express.json());             
app.use(morgan("dev"));
// app.use((req, res, next) => {
//   console.log("middleware working..!");
//   next();
// });
app.use("/api/insta", authRoute);

module.exports = app
