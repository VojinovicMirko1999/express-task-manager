const mongoose = require("mongoose");

const connectDB = (url) => {
  // IN V6 AND BIGGER VERSION IS NOT NECCESSERALY TO ADD SECOND ARGUMENT OF connect FUNCTION
  // IT IS ADDED BECAUSE OF WARNING
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
