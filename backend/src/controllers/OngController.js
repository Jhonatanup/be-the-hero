const connection = require('../database/connection')
const generateUniqueId = require('../../src/utils/generateUniqueId')

module.exports = {
    async create(request, response){
        let { name, email, whatsapp, city, uf } = request.body
        whatsapp = `55${whatsapp}`
        const id = generateUniqueId()

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })

        return response.json({ id })
    },
    async index(request, response){
        const ongs = await connection('ongs').select('*')
        
        return response.json(ongs)
    }
}