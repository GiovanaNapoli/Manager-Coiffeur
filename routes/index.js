const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.json({

        establishment: [{

            name: 'Dogin'

        }]

    });

});

module.exports = routes;


