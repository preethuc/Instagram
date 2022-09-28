const express = require("express");
const morgan = require("morgan");
const globalErrorHandler = require("../src/Controllers/errorController");
// const AppError = require('./utils/AppError')

const app = express();

const authRoute = require("../src/Routes/authRoute");
const profileRoute = require("../src/Routes/profileRoute");
// const postRoute = require("../src/Routes/postRoute");


//MIDDLEWARE
app.use(morgan("dev"));
app.use(express.json());

app.use((req, res, next) => {
  console.log("middleware working..!");
  next();
});

app.use('/api/insta', authRoute)
app.use('/api/instagram', profileRoute)
// app.use('/api/post',postRoute)

//error handling function
// app.all("*", (req, res, next) => {
//   next(new AppError(`can't find ${req.originalUrl} on this server!`, 404));
// });
// app.use(globalErrorHandler);

module.exports = app;
