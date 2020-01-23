/* eslint-disable no-unused-vars */
import Sequelize, { Model } from 'sequelize';

class Plano extends Model {
    static init(sequelize) {
        super.init(
            {
                descricao: Sequelize.STRING,
                valor: Sequelize.REAL,
            },
            {
                sequelize,
            }
        );
        return this;
    }
}

export default Plano;
