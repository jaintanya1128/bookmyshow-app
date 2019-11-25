const mongoose = require('../dbconnection');

const Schema = mongoose.Schema;

module.exports = new Schema({
	_id: mongoose.Schema.Types.ObjectId,
	hall_name: String,
	total_seats: Number,
	screen_size: String
});
