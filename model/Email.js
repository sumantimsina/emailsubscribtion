const mongoose = require("mongoose");

const EmailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please provide email"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      ,
      "Please add a valid email",
    ],
  },
});

module.exports = mongoose.model("Email", EmailSchema);
