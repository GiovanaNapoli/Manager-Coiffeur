const connection = require('../database/connection');

module.exports = {

    async index(request,response){
        // Listando Atendimento
        const attendance = await connection('attendances').select('*');
        
        return response.json(attendance);
    },

    async create(request,response){
        const {customer_id, date, hour, price, description} = request.body;
        
        const establishment_id = request.headers.authorization;
        
        const status = 1;

        const [id] = await connection('attendances').insert({
            establishment_id,
            customer_id,
            hour,
            date,
            price,
            description,
            status
        });

        return response.json({id});
    }

}