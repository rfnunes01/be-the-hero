const connection = require('../database/connection');
const crypto = require('crypto');
module.exports = {

    /* LISTA OS REGISTROS */
    async index(request, response) {
    const ongs = await connection('ongs').select('*');

    return response.json(ongs);
    },

    /* CRIA UM NOVO REGISTRO */
    async store(request, response) {
        const {name, email, whatsapp, city, uf} = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        });

        return response.json({ id });
    }
};