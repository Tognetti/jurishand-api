const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

const artigosRoute = require('./routes/artigos')
app.use('/', artigosRoute)

app.listen(PORT, function() {
    console.log('Running on PORT ' + PORT);
});

