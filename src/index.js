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
const routes = require('../routes/index');

var app = express();

app.use(cors);
app.use(express.json());
app.use(routes);

app.listen(3000, '127.0.0.1', () => {
    
    console.log('Servidor Rodando');

});