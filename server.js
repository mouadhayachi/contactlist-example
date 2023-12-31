const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require("passport");
require('dotenv').config()

const app = express();

const swagger = require('./routes/api/swagger');
const healthCheck = require('./routes/api/healthcheck');
const users = require('./routes/api/users');

// Middleware
app.use(express.json());
app.use(cors());

// DB Config
const db = require('./config/keys').mongoURI;

// connect to Mongo
mongoose
  .connect(db,{
    useNewUrlParser: true,
    useUnifiedTopology:true
  })
  .then(() => console.log('MongoDB Connected..'))
  .catch(err => console.log(err));

  // Use Routes
  app.use('/api/v1/healthcheck',healthCheck);
  app.use('/api/v1/',swagger);
  app.use('/api/v1/users',users)

const port = process.env.PORT || 7000;
app.listen(port, () => console.log(`Server running at ${port}`));