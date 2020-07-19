const express = require('express');
const routes = express.Router();
const connection = require('../src/database/connection');

routes.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>Rota padrão</h1>
            </body>
        </html>
    `);
});


routes.post('/', async (req, res) => {

    const {name, email, password} = req.body;
    
    const [id] = await connection('establishments').insert({
        name,
        email,
        password
    });

    return res.json({id})

});

module.exports = routes;