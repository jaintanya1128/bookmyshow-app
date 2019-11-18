const bookingModel = require('../controllers/booking-controller');

exports.bookings_create_booking = (req, res, next) => {};

exports.bookings_update_booking = (req, res, next) => {};

exports.bookings_delete_booking = (req, res, next) => {};

exports.bookings_get_booking = (req, res, next) => {
	const id = req.params.id;

	res.status(200).json({});
};

// exports.bookings_get_all = (req, res, next) => {};

// exports.bookings_get_all_bytheater = (req, res, next) => {};
