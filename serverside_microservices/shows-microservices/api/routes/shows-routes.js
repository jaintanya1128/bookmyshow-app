const express = require('express');
const router = express.Router();
const showController = require('../controllers/shows-controller');

//save a show complete detail
router.post('/', showController.shows_create_show);

//update a show
router.patch('/:id', showController.shows_update_show);

//delete a show
router.delete('/:id', showController.shows_delete_show);

//get a show complete detail
router.get('/:id', showController.shows_get_show);

//get all shows
router.get('/', showController.shows_get_all);

//get all shows based on movie
router.get('/movie/:id', showController.shows_get_all_bymovie);

//get all shows based on date
router.get('/date/:date', showController.shows_get_all_bydate);

//get all shows based on theater
router.get('/theater/:id', showController.shows_get_all_bytheater);

//get all shows based on movie and theater
router.get('/movietheater/:movieid/:theaterid', showController.shows_get_all_bymovietheater);

module.exports = router;
