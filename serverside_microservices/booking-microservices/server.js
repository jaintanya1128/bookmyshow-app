const express = require('express');
const routes = require('./routes');

const PORT = process.env.PORT || 5002;

const app = express();

//initialize the body parser middleware
app.use(express.json()); //this will handle the raw json

routes(app);

app.listen(PORT, () => `Server is listening to the port on ${PORT}`);
