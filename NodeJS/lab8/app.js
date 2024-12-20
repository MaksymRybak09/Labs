const express = require("express");
require('./database/mongoose');
require('dotenv').config();

const articleRoutes = require('./routes/article-routes');
const userRoutes = require('./routes/user-routes');

const PORT = process.env.PORT;
const HOST = process.env.HOST;

const app = express();
app.use(express.json());

app.use(articleRoutes);
app.use(userRoutes);

app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`http://${HOST}:${PORT}`);
});

module.exports = app;