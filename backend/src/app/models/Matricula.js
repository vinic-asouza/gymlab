/* eslint-disable no-unused-vars */
import Sequelize, { Model } from 'sequelize';

class Matricula extends Model {
    static init(sequelize) {
        super.init(
            {
                forma_pagamento: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );

        return this;
    }

    static associate(models) {
        this.belongsTo(models.Pessoa, { foreignKey: 'aluno_id', as: 'aluno' });
        this.belongsTo(models.Plano, { foreignKey: 'plano_id', as: 'plano' });
    }
}

export default Matricula;
