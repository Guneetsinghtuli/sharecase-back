const mongoose = require("mongoose");

const smallCaseModal = mongoose.Schema({
  name: String,
  description: String,
  image: String,
  stocks: [
    {
      name: String,
      weight: Number,
      price: Number,
      stockCode: String,
    },
  ],
  createdOn: Date,
  updatedOn: Date,
  downVotes: Number,
  upVotes: Number,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("SmallCase", smallCaseModal);
