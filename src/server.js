const app = require("../src/app");
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/Insta-Data');
mongoose.connection
  .once('open', () => {
    console.log('DB connected');
  })
  .on('error', (error) => {
    console.log('error is:', error);
  });                                      

//server
app.listen(3000, () =>
  console.log("Listening on the port 3000")
);
