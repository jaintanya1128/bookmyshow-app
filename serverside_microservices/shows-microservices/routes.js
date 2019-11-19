const morgan = require("morgan");
const showsRoutes = require("./api/routes/shows-routes");

module.exports = function(app) {
  //HTTP request logger middleware
  app.use(morgan("dev"));

  //Routes
  app.use("/", showsRoutes);

  //handle error routes that can not be handled above
  app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
  });

  app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
      error: {
        message: error.message
      }
    });
  });
};
