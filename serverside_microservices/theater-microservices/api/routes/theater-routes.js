const express = require('express');
const router = express.Router();
const theaterController = require('../controllers/theater-controller');

//get all theaters
router.get('/', theaterController.theaters_get_all);

//get all theaters based on location
router.get('/location/:loc', theaterController.theaters_get_all_bylocation);

//get all theaters based on location
router.get('/brand/:brand', theaterController.theaters_get_all_bybrand);

//save a theater's complete detail
router.post('/', theaterController.theaters_create_theater);

//get a theater complete detail
router.get('/:id', theaterController.theaters_get_theater);

//update a theater
router.patch('/:id', theaterController.theaters_update_theater);

//delete a theater
router.delete('/:id', theaterController.theaters_delete_theater);

module.exports = router;
