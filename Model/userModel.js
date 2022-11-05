const mongoose = require("mongoose");


const userModal = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    email: String,
    image: String,
    password: String,
    createdSmallCases: [{ type: mongoose.Schema.Types.ObjectId, ref: "SmallCase" }],
    portfolio: [{ type: mongoose.Schema.Types.ObjectId, ref: "Stock" }],

})

module.exports = mongoose.model("User", userModal);

