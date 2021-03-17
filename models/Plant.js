const mongoose = require("mongoose");

const plantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      maxlength: 32,
      unique: true,
    },
    caudal: String,
    lat: Number,
    long: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Plant", plantSchema);
