const connection = require('../database/connection');

module.exports = {

    async index (request, response) {

        const establishments = await connection('establishments').select('*');

        return response.json(establishments);

    },

    async create (request, response){
        
        const {name, email, password} = request.body;

        const [id] = await connection('establishments').insert({
            name,
            email,
            password
        });

        return response.json({id});
        
    }

}