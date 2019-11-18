const express = require('express');
const routes = require('./routes');

const PORT = process.env.PORT;

const app = express();

//initialize the body parser middleware
app.use(express.json()); //this will handle raw json

routes(app);

app.listen(PORT, () => `Server is listening to the port on ${PORT}`);
