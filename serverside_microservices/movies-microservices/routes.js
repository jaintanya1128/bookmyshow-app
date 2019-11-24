const morgan = require("morgan");
const movieRoutes = require("./api/routes/movies-route");
const cors = require("cors");
module.exports = function(app) {
  //HTTP request logger middleware
  app.use(morgan("dev"));
  app.use(cors());

  // Routes which should handle requests
  app.use("/", movieRoutes);

  //all other routes that can not be handelled by above routes
  app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
  });

  //error handling routes
  app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
      error: {
        message: error.message
      }
    });
  });
};
