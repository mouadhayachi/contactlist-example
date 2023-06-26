const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 7000;
app.listen(port, () => console.log(`Server running at ${port}`));