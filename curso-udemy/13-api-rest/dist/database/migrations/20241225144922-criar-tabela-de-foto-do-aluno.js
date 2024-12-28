"use strict"; function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } }@type {Promise.resolve().then(() => _interopRequireWildcard(require('sequelize-cli'))).Migration}

module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('fotos', {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        originalname: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        filename: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        aluno_id: {
            type: Sequelize.INTEGER,
            allowNull: true,
            references: {
                model: 'alunos',
                key: 'id',
            },
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
        },
        createdAt: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        updatedAt: {
            type: Sequelize.DATE,
            allowNull: false,
        },
    }),

    down: (queryInterface) => queryInterface.dropTable('fotos'),
}
