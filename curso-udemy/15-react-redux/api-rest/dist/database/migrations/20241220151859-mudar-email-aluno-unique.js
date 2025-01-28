"use strict"; function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } }const { Sequelize } = require('sequelize')

@type { Promise.resolve().then(() => _interopRequireWildcard(require('sequelize-cli'))).Migration }

module.exports = {
    async up: (queryInterface, Sequelize) => queryInterface.changeColumn('aluno', 'email', {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    ),

    down: () => {},
}
