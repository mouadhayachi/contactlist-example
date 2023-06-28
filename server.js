const express = require("express");
const cors = require("cors");

const app = express();

const swagger = require('./routes/api/swagger');
const healthCheck = require('./routes/api/healthcheck');

// Middleware
app.use(express.json());
app.use(cors());

  // Use Routes
  app.use('/api/v1/healthcheck',healthCheck);
  app.use('/api/v1/',swagger);

const port = process.env.PORT || 7000;
app.listen(port, () => console.log(`Server running at ${port}`));