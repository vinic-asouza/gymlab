module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('planos', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            descricao: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            valor: {
                type: Sequelize.REAL,
                allowNull: false,
            },
            created_at: {
                type: Sequelize.DATE,
            },
            updated_at: {
                type: Sequelize.DATE,
            },
        });
    },

    down: queryInterface => {
        return queryInterface.dropTable('planos');
    },
};
