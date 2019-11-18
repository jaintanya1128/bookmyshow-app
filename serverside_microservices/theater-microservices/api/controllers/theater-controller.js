const mongoose = require("../../database/dbconnection");
const theaterModel = require("../../database/models/theater-model");
const config = require("../../config.json");

//save a theater's complete detail
exports.theaters_create_theater = (req, res, next) => {
  const theater = new theaterModel({
    _id: new mongoose.Types.ObjectId(),
    brand: req.body.brand,
    name: req.body.name,
    location: req.body.location.toLowerCase(),
    address: req.body.address,
    halls: req.body.halls.map(h => {
      return {
        _id: new mongoose.Types.ObjectId(),
        hall_name: h.name,
        total_seats: h.total_seats,
        screen_size: h.screen_size
      };
    }),
    totalhallcount: req.body.halls.length
  });
  theater
    .save()
    .then(result => {
      res.status(200).json({
        status_code: 200,
        status_type: "success",
        message: "saved a theater's detail",
        details: {
          description: "details of added theater",
          brand: result.brand,
          name: result.name,
          location: result.location,
          address: result.address,
          contains_halls: result.halls,
          totalhallcount: result.totalhallcount,
          request: {
            description: "get the details of a theater",
            type: "GET",
            url: `http://${config.domainName}:${process.env.PORT}/api/theaters/${result._id}`
          }
        }
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

//update a theater
exports.theaters_update_theater = (req, res, next) => {
  const id = req.params.id;
  const updateOps = {};
  for (const ops of req.body) {
    if (ops.propName !== "location") {
      updateOps[ops.propName] = ops.value;
    } else {
      updateOps[ops.propName] = ops.value.toLowerCase();
    }
  }

  theaterModel
    .update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      if (result.nModified === 0) {
        res.status(500).json({
          status_code: 500,
          status_type: "error",
          message:
            "theater details could not be updated due to some server error, please try again later"
        });
      }
      res.status(200).json({
        status_code: 200,
        status_type: "success",
        message: "Theater details updated successfully",
        request: {
          description: "get the details of the theater",
          type: "GET",
          url: `http://${config.domainName}:${process.env.PORT}/api/theaters/${id}`
        }
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

//delete a theater
exports.theaters_delete_theater = (req, res, next) => {
  const id = req.params.id;

  theaterModel
    .deleteOne({ _id: id })
    .exec()
    .then(result => {
      if (result.deletedCount === 0) {
        res.status(500).json({
          status_code: 500,
          status_type: "error",
          message:
            "theater not deleted due to some server error, please try again later"
        });
      }

      res.status(200).json({
        status_code: 200,
        status_type: "success",
        message: "theater deleted successfully",
        request: {
          description: "to add a new theater",
          type: "POST",
          url: `http://${config.domainName}:${process.env.PORT}/api/theaters/`,
          body: {
            brand: "String",
            name: "String",
            location: "String",
            address: "String",
            contains_halls: "Array of String",
            totalhallcount: "Number"
          }
        }
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

//get a theater complete detail
exports.theaters_get_theater = (req, res, next) => {
  const id = req.params.id;

  theaterModel
    .findById(id)
    .select("brand name location address halls totalhallcount")
    .exec()
    .then(result => {
      if (!result) {
        res.status(404).json({
          status_code: 404,
          status_type: "error",
          message: "No valid entry found for provided ID"
        });
      }
      res.status(200).json({
        status_code: 200,
        status_type: "success",
        message: "the details of a theater",
        details: {
          brand: result.brand,
          name: result.name,
          location: result.location,
          address: result.address,
          hall: result.halls,
          total_halls_count: result.totalhallcount
        },
        request: {
          description: "get all the theaters list",
          type: "GET",
          url: `http://${config.domainName}:${process.env.PORT}/api/theaters/`
        }
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

//get all theaters
exports.theaters_get_all = (req, res, next) => {
  theaterModel
    .find()
    .select("brand name location address halls totalhallcount")
    .exec()
    .then(result => {
      const data = {
        status_code: 200,
        status_type: "success",
        message: "complete list of theaters",
        details: {
          count: result.length,
          theaters: result.map(r => {
            return {
              brand: r.brand,
              name: r.name,
              address: r.address,
              location: r.location,
              hall: r.halls,
              total_halls_count: r.totalhallcount,
              request: {
                description: "get theater's detail",
                type: "GET",
                url: `http://${config.domainName}:${process.env.PORT}/api/theaters/${r._id}`
              }
            };
          })
        }
      };
      res.status(200).json({ data });
    })
    .catch(err => {
      res.status(500).json({
        status_code: 500,
        status_type: "error",
        message: err.message
      });
    });
};

//get all theaters based on location
exports.theaters_get_all_bylocation = (req, res, next) => {
  theaterModel
    .find({
      location: { $regex: req.params.loc, $options: "i" }
    })
    .select("brand name location address halls totalhallcount")
    .exec()
    .then(result => {
      const data = {
        status_code: 200,
        status_type: "success",
        message: `list of theaters in ${req.params.loc}`,
        details: {
          count: result.length,
          theaters: result.map(r => {
            return {
              brand: r.brand,
              name: r.name,
              address: r.address,
              location: r.location,
              halls: r.halls,
              total_halls_count: r.totalhallcount,
              request: {
                description: "get theater's detail",
                type: "GET",
                url: `http://${config.domainName}:${process.env.PORT}/api/theaters/${r._id}`
              }
            };
          })
        }
      };
      res.status(200).json({ data });
    })
    .catch(err => {
      res.status(500).json({
        status_code: 500,
        status_type: "error",
        message: err.message
      });
    });
};

//get all theaters based on brand
exports.theaters_get_all_bybrand = (req, res, next) => {
  theaterModel
    .find({
      brand: { $regex: req.params.brand, $options: "i" }
    })
    .select("brand name location address halls totalhallcount")
    .exec()
    .then(result => {
      const data = {
        status_code: 200,
        status_type: "success",
        message: `list of ${req.params.brand} theaters`,
        details: {
          count: result.length,
          theaters: result.map(r => {
            return {
              brand: r.brand,
              name: r.name,
              address: r.address,
              location: r.location,
              halls: r.halls,
              total_halls_count: r.totalhallcount,
              request: {
                description: "get theater's detail",
                type: "GET",
                url: `http://${config.domainName}:${process.env.PORT}/api/theaters/${r._id}`
              }
            };
          })
        }
      };
      res.status(200).json({ data });
    })
    .catch(err => {
      res.status(500).json({
        status_code: 500,
        status_type: "error",
        message: err.message
      });
    });
};
