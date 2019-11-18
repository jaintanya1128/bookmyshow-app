const mongoose = require('../dbconnection');

const Schema = mongoose.Schema;

module.exports = new Schema({
	_id: mongoose.Schema.Types.ObjectId,
	movie_id: { type: mongoose.Schema.Types.ObjectId, required: true },
	theater_id: { type: mongoose.Schema.Types.ObjectId, required: true },
	hall_id: { type: mongoose.Schema.Types.ObjectId, required: true },
	show_date: { type: Date, required: true },
	show_time: { type: Date, required: true },
	status: { type: Boolean, required: true }
});
