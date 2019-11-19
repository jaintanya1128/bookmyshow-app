const mongoose = require("mongoose");

const Schema = mongoose.Schema;

module.exports = new Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    user: {
      name: { type: String, required: true },
      user_id: { type: mongoose.Schema.Types.ObjectId, required: true }
    },
    booked_show: { type: mongoose.Schema.Types.ObjectId, required: true }
  },
  { timestamps: true }
);
