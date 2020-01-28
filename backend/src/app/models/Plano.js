/* eslint-disable no-unused-vars */
import Sequelize, { Model } from 'sequelize';

class Plano extends Model {
    static init(sequelize) {
        super.init(
            {
                descricao: Sequelize.STRING,
                valor: Sequelize.REAL,
                created_at: Sequelize.DATE,
                updated_at: Sequelize.DATE
            },
            {
                sequelize,
            }
        );
        return this;
    }
}

export default Plano;
