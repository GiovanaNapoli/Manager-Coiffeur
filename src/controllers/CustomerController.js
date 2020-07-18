const connection = require('../database/connection');

module.exports = {

    async index(request, response){

        const customers = await connection('customers').select('*');
    
        return response.json(customers);
    
    },

    async create(request, response) {

        const { name, birth, address, phone } = request.body;
        
        const establishment_id = request.headers.authorization;
        
        const [id] = await connection('customers').insert({
            establishment_id,
            name,
            address,
            phone,
            birth
        });

        return response.json({establishment_id});

    }
};