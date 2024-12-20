@type { import('sequelize-cli').Migration }
const bcryptjs = require('bcryptjs')

module.exports = {
    async up(queryInterface) {
        await queryInterface.bulkInsert('users', [{
            nome: 'Diego',
            email: 'diego@gmail.com',
            password_hash: await bcryptjs.hash('123456', 8),
            created_at: new Date(),
            update_at: new Date()
        }, {
            nome: 'João',
            email: 'joao@gmail.com',
            password_hash: await bcryptjs.hash('234567', 8),
            created_at: new Date(),
            update_at: new Date()
        }, {
            nome: 'Emilio',
            email: 'emilio@gmail.com',
            password_hash: await bcryptjs.hash('345678', 8),
            created_at: new Date(),
            update_at: new Date()
        }], {})
    },

    down: () => {},
}
