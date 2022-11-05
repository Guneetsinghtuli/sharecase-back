const mongoose = require("mongoose");



mongoose
  .connect("mongodb+srv://guneett:guneet@cluster1.duxxsm4.mongodb.net/?retryWrites=true&w=majority")
  .finally(() => {console.log("Connected to DB")})
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Could not connect to MongoDB...", err));


