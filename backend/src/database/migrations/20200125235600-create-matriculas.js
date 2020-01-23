module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('matriculas', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            aluno_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {         // User belongsTo Company 1:1
                    model: 'pessoas',
                    key: 'id'
                }
            },
            plano_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {         // User belongsTo Company 1:1
                    model: 'planos',
                    key: 'id'
                }
            },
            forma_pagamento: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        });
    },

    down: queryInterface => {
        return queryInterface.dropTable('matriculas');
    },
};
