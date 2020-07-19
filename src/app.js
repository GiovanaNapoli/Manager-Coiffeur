/**
 * Instalar:
    * express
    * nodemon
    * knex
    * sqlite
*Instalar dps:
    *celebrate
    *cors
*/

const express = require('express');
const cors = require('cors');
const routes = require('./routes');

var app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

module.exports = app;