const mongoose = require("mongoose");
require('dotenv').config();

const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;

const URL = `mongodb://${DB_HOST}/${DB_NAME}`;

mongoose
    .connect(URL)
    .then((res) => console.log('Connected to MongoDB'))
    .catch((err) => console.log(`DB connection error: ${err}`));