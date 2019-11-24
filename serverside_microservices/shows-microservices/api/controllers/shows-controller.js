const showsModel = require("../../database/models/shows-model");
const mongoose = require("../../database/dbconnection");
const config = require("../../config.json");
const axios = require("axios");

//save a show complete detail
exports.shows_create_show = (req, res, next) => {
  const show = new showsModel({
    _id: new mongoose.Types.ObjectId(),
    movie_id: req.body.movie_id,
    theater_id: req.body.theater_id,
    hall_id: req.body.hall_id,
    show_date_time: req.body.show_date_time,
    status: req.body.status
  });

  show
    .save()
    .then(result => {
      console.log(result);
      res.status(200).json({
        status_code: 200,
        status_type: "success",
        message: "saved show details"
      });
    })
    .catch(err => {
      res.status(500).json({
        status_code: 500,
        status_type: "error",
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
    .then(result => {
      if (result.nModified === 0) {
        res.status(500).json({
          status_code: 500,
          status_type: "error",
          message:
            "details could not be updated due to some server error, please try again later"
        });
      }
      res.status(200).json({
        status_code: 200,
        status_type: "success",
        message: "Details updated successfully"
      });
    })
    .catch(err => {
      res.status(500).json({
        status_code: 500,
        status_type: "error",
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
    .then(result => {
      if (result.deletedCount === 0) {
        res.status(500).json({
          status_code: 500,
          status_type: "error",
          message:
            "Not deleted due to some server error, please try again later"
        });
      }

      res.status(200).json({
        status_code: 200,
        status_type: "success",
        message: "Deleted successfully"
      });
    })
    .catch(err => {
      res.status(500).json({
        status_code: 500,
        status_type: "error",
        message: err.message
      });
    });
};

//get a show complete detail
exports.shows_get_show = (req, res, next) => {
  const id = req.params.id;
  let showsObj = {};
  function updateShowsDetails(key, value) {
    showsObj[key] = value;

    // console.log("show object");
    // console.log(showsObj);
  }

  showsModel
    .findById(id)
    .select("movie_id theater_id hall_id show_date_time status")
    .exec()
    .then(result => {
      //console.log(`shows result: ${result}`);
      showsObj.show_date_time = result.show_date_time;
      showsObj.status = result.status;

      if (!result) {
        res.status(404).json({
          status_code: 404,
          status_type: "error",
          message: "No valid entry found for provided ID"
        });
      }

      axios({
        method: "get",
        url: `http://${config.domainName}:${config.gatewayPort}/api/theaters/${result.theater_id}`
      })
        .then(response => {
          const hall = response.data.details.hall.filter(
            h => h._id == result.hall_id
          );
          response.data.details.hall = hall;
          updateShowsDetails("theater", response.data.details);
        })
        .catch(error => {
          console.log(`error: ${error.message}`);
        });

      axios({
        method: "get",
        url: `http://${config.domainName}:${config.gatewayPort}/api/movies/${result.movie_id}`
      })
        .then(response => {
          //console.log("movie result");

          //console.log(response.data.details);
          updateShowsDetails("movie", response.data.details);
        })
        .catch(error => {
          console.log(`error: ${error.message}`);
        });

      setTimeout(function() {
        res.status(200).json({
          status_code: 200,
          status_type: "success",
          message: "the show details are",
          details: {
            theater: showsObj.theater.name,
            theater_address: showsObj.theater.address,
            movie: showsObj.movie.name,
            movie_desc: showsObj.movie.desc,
            movie_type: showsObj.movie.category,
            movie_rating: showsObj.movie.avg_rating,
            movie_release_date: showsObj.movie.release_date,
            movie_poster_path: showsObj.movie.poster_path,
            hall: showsObj.theater.hall[0].hall_name,
            show_date_time: new Date(
              showsObj.show_date_time
            ).toLocaleDateString(),
            status: showsObj.status
          }
        });
      }, 2000);
    })
    .catch(err => {
      res.status(500).json({
        status_code: 500,
        status_type: "error",
        message: err.message
      });
    });
};

//get all shows based on movie
exports.shows_get_all_bymovie = (req, res, next) => {
  const id = req.params.id;
  let showsObj = {};
  function updateShowsDetails(key, value) {
    showsObj[key] = value;

    // console.log("show object");
    // console.log(showsObj);
  }

  showsModel
    .find({ movie_id: id })
    .select("movie_id theater_id hall_id show_date_time status")
    .exec()
    .then(result => {
      console.log(`shows result: ${result}`);
      // showsObj.show_date_time = result.show_date_time;
      // showsObj.status = result.status;

      if (!result) {
        res.status(404).json({
          status_code: 404,
          status_type: "error",
          message: "No valid entry found for provided ID"
        });
      }

      res.status(404).json({
        status_code: 404,
        status_type: "error",
        message: result
      });

      // axios({
      //   method: "get",
      //   url: `http://${config.domainName}:${config.gatewayPort}/api/theaters/${result.theater_id}`
      // })
      //   .then(response => {
      //     const hall = response.data.details.hall.filter(
      //       h => h._id == result.hall_id
      //     );
      //     response.data.details.hall = hall;
      //     updateShowsDetails("theater", response.data.details);
      //   })
      //   .catch(error => {
      //     console.log(`error: ${error.message}`);
      //   });

      // axios({
      //   method: "get",
      //   url: `http://${config.domainName}:${config.gatewayPort}/api/movies/${result.movie_id}`
      // })
      //   .then(response => {
      //     //console.log("movie result");

      //     //console.log(response.data.details);
      //     updateShowsDetails("movie", response.data.details);
      //   })
      //   .catch(error => {
      //     console.log(`error: ${error.message}`);
      //   });

      // setTimeout(function() {
      //   res.status(200).json({
      //     status_code: 200,
      //     status_type: "success",
      //     message: "the show details are",
      //     details: {
      //       theater: showsObj.theater.name,
      //       theater_address: showsObj.theater.address,
      //       movie: showsObj.movie.name,
      //       movie_desc: showsObj.movie.desc,
      //       movie_type: showsObj.movie.category,
      //       movie_rating: showsObj.movie.avg_rating,
      //       movie_release_date: showsObj.movie.release_date,
      //       movie_poster_path: showsObj.movie.poster_path,
      //       hall: showsObj.theater.hall[0].hall_name,
      //       show_date_time: new Date(
      //         showsObj.show_date_time
      //       ).toLocaleDateString(),
      //       status: showsObj.status
      //     }
      //   });
      // }, 2000);
    })
    .catch(err => {
      res.status(500).json({
        status_code: 500,
        status_type: "error",
        message: err.message
      });
    });
};

//get all shows based on date
exports.shows_get_all_bydate = (req, res, next) => {
  res.status(200).json({
    message: "shows_get_all_bydate"
  });
};

//get all shows based on theater
exports.shows_get_all_bytheater = (req, res, next) => {
  res.status(200).json({
    message: "shows_get_all_bytheater"
  });
};

//get all shows based on movie and theater
exports.shows_get_all_bymovietheater = (req, res, next) => {
  res.status(200).json({
    message: "shows_get_all_bymovietheater"
  });
};
