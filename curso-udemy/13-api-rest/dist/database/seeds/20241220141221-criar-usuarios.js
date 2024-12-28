"use strict"; function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } }@type { Promise.resolve().then(() => _interopRequireWildcard(require('sequelize-cli'))).Migration }
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
