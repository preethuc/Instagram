// const express = require("express");
// const jwt = require("jsonwebtoken");
// const morgan = require("morgan");


// // const secretMessage = "preetha-loves-preetha";
// // const expiresMessage = "20d";
// const app = express();
// app.use(morgan("dev"));


// //get
// app.get("/api", (req, res) => {
//   res.json({
//     message: "welcome to this API service",
//   });
// });

// //post
// app.post("/api/posts", verifyToken, (req, res) => {
//   const authData= jwt.verify(req.token, "secretkey")
//     res.status(201).json({
//         status: "success",
//         message: "posts request created...",
//         authData,
//       });
//     });


//post-login
app.post("/api/login", (req, res) => {
  const user = {
    id: 1,
    username: "preethu",
    email: "chelladuraipreetha@gmail.com",
  };
  // console.log(user);
 const token= jwt.sign({ user: user }, "secretkey")
    //  console.log(token);
  res.status(201).json({
    status: "success",
    // user,
    token,
  });
  });
 

// function verifyToken(req, res, next) {
//   const bearerHeader = req.headers["authorization"];
//   // console.log(req.headers);
//   if (typeof bearerHeader !== "undefined") {
//     const bearerToken = bearerHeader.split(" ")[1];
//     req.token = bearerToken;
//     next();
//   } else {
//     res.status(403).json({
//       status: "faillll",
//     });
//   }
// }
// //server
// app.listen(3000, () => {
//   console.log("server running on the port 3000");
// });
