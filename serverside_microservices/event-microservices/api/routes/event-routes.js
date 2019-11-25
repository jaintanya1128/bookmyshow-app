const express = require("express");
const router = express.Router();
const eventController = require("../controllers/event-controller");

//get all theaters
router.get("/", eventController.theaters_get_all);

//get all theaters based on location
router.get("/location/:loc", eventController.theaters_get_all_bylocation);

//get all theaters based on location
router.get("/brand/:brand", eventController.theaters_get_all_bybrand);

//save a theater's complete detail
router.post("/", eventController.theaters_create_theater);

//get a theater complete detail
router.get("/:id", eventController.theaters_get_theater);

//update a theater
router.patch("/:id", eventController.theaters_update_theater);

//delete a theater
router.delete("/:id", eventController.theaters_delete_theater);

/*
//save a show complete detail
router.post("/", showController.shows_create_show);

//update a show
router.patch("/:id", showController.shows_update_show);

//delete a show
router.delete("/:id", showController.shows_delete_show);

//get a show complete detail
router.get("/:id", showController.shows_get_show);

//get all shows
//router.get('/', showController.shows_get_all);

//get all shows based on movie
router.get("/movie/:id", showController.shows_get_all_bymovie);

*/
module.exports = router;
