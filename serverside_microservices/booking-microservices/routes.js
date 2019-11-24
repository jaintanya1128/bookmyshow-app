const morgan = require("morgan");
const bookingRoutes = require("./api/routes/booking-routes");
const cors = require("cors");
module.exports = function(app) {
  //HTTP request logger middleware
  app.use(morgan("dev"));
  app.use(cors());
  //Routes
  app.use("/", bookingRoutes);

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
