const express = require('express');
const connection = require('./db/db');
const cors = require("cors");
const log = require('./logger/logger');
const router = require('./routes/routes');


const PORT= 3333;
const app= express();
app.use(express.json());
app.use(cors());

// Database Connection //
connection();

// All Routes //
app.use('/', router);

app.listen(process.env.PORT || PORT, log.info(`Listening to Port ${PORT}`));