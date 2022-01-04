const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT;

// user defined middlewares
// example for allowing only GET requests
// app.use((req, res, next) => {
//   if (req.method === "GET") {
//     return res.send("GET requests are disabled");
//   }
//   next();
// });

// When website is in maitenance mode
// app.use((req, res, next) => {
//   res.status(503).send("Site is under maintenance, please try again later");
// });

// configuring express to automatically parse the incoming json for us,
// so we have it accessible as an object that we can use
app.use(express.json());
// registering userRouter and taskRouter with express app
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is listening on port", port);
});
