// express
const express = require("express");
const app = express();

// database
const connectDB = require("./db/connect");

// env secret file
require("dotenv").config();

// not found response
const notFound = require("./middleware/not-found");

// error handler
const errorHandlerMiddleware = require("./middleware/error-handler");

// routes
const tasks = require("./routes/tasks");

// middleware
app.use(express.static("./public"));
app.use(express.json());

// port
const port = process.env.PORT || 8001;

// using routes
app.use("/api/v1/tasks", tasks);

// using not found middleware
app.use(notFound);

// using error handler
app.use(errorHandlerMiddleware);

// starting server
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
