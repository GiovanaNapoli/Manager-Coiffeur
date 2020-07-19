const connection = require('../database/connection');

module.exports = {

    async index(request, response) {

        const procedures = await connection('procedures').select('*');
   
        return response.json(procedures);
   
    },

    async create(request, response) {

        const { type, name, price } = request.body;

        const establishment_id = request.headers.authorization;

        const [id] = await connection('procedures').insert({
            establishment_id,
            type,
            name,
            price
        });

        return response.json({ id });
    
    }

};