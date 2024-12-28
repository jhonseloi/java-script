"use strict";/**
 * @type {import('sequelize-cli').Migration}
 */

module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('alunos', {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        nome: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        sobrenome: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        },
        idade: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        peso: {
            type: Sequelize.FLOAT,
            allowNull: false,
        },
        altura: {
            type: Sequelize.FLOAT,
            allowNull: false,
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

    down: (queryInterface) => queryInterface.dropTable('alunos'),
}
