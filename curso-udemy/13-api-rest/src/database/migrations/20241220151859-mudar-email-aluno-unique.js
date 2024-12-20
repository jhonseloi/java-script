const { Sequelize } = require('sequelize')

@type { import('sequelize-cli').Migration }

module.exports = {
    async up: (queryInterface, Sequelize) => queryInterface.changeColumn('aluno', 'email', {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    ),

    down: () => {},
}
