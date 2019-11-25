const mongoose = require("../dbconnection");

const Schema = mongoose.Schema;

module.exports = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  movie_id: { type: Number, required: true, trim: true },
  theater: {
    type: [require("../schemas/theater-schema")],
    required: true,
    trim: true
  },
  show_date_time: { type: Date, required: true, trim: true },
  status: {
    type: String,
    required: true,
    trim: true,
    enum: ["Active", "Inactive"]
  }
});
