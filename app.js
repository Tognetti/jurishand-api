const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

const artigosRoute = require('./routes/artigos')
app.use('/', artigosRoute)

let server = app.listen(PORT, function() {
    console.log('Running on PORT ' + PORT);
});

module.exports = {app, server};