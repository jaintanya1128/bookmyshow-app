const showsModel = require('../../database/models/shows-model');

//save a show complete detail
exports.shows_create_show = (req, res, next) => {
	const show = new showsModel({});

	show
		.save()
		.then()
		.catch(err => {
			res.status(500).json({
				status_code: 500,
				status_type: 'error',
				message: err.message
			});
		});
};

//update a show
exports.shows_update_show = (req, res, next) => {
	const id = req.params.id;

	const updateOps = {};
	for (const ops of req.body) {
		updateOps[ops.propName] = ops.propVal;
	}

	showsModel
		.update({ _id: id }, { $set: updateOps })
		.exec()
		.then()
		.catch(err => {
			res.status(500).json({
				status_code: 500,
				status_type: 'error',
				message: err.message
			});
		});
};

//delete a show
exports.shows_delete_show = (req, res, next) => {
	const id = req.params.id;

	showsModel
		.deleteOne({ _id: id })
		.exec()
		.then()
		.catch(err => {
			res.status(500).json({
				status_code: 500,
				status_type: 'error',
				message: err.message
			});
		});
};

//get a show complete detail
exports.shows_get_show = (req, res, next) => {
	const id = req.params.id;

	showsModel
		.findById(id)
		.exec()
		.then()
		.catch(err => {
			res.status(500).json({
				status_code: 500,
				status_type: 'error',
				message: err.message
			});
		});
};

//get all shows
exports.shows_get_all = (req, res, next) => {
	showsModel
		.find()
		.exec()
		.then()
		.catch(err => {
			res.status(500).json({
				status_code: 500,
				status_type: 'error',
				message: err.message
			});
		});
};

//get all shows based on movie
exports.shows_get_all_bymovie = (req, res, next) => {};

//get all shows based on date
exports.shows_get_all_bydate = (req, res, next) => {
	res.status(200).json({
		message: 'shows_get_all_bydate'
	});
};

//get all shows based on theater
exports.shows_get_all_bytheater = (req, res, next) => {
	res.status(200).json({
		message: 'shows_get_all_bytheater'
	});
};

//get all shows based on movie and theater
exports.shows_get_all_bymovietheater = (req, res, next) => {
	res.status(200).json({
		message: 'shows_get_all_bymovietheater'
	});
};
