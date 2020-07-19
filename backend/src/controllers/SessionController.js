const connection = require('../database/connection');

module.exports = {
    async create(request, response) {

        const { email, password } = request.body;

        const establishments = await connection('establishments')
            .where('email', '=', email)
            .where('password', '=', password)
            .first();

        if (!establishments) {
            return response.status(400).json({ error: 'Estabelecimento não encontrado' })
        }

        return response.json(establishments);
    
    }
}