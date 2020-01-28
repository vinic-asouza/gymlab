/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import * as Yup from 'yup';
import Plano from '../models/Plano';

class PlanoController {
    async find(req, res) {

        const plano = await Plano.findOne({
            where: { id: req.params.id },
        });

        return res.json(plano);
    }

    async index(req, res) {

        const planos = await Plano.findAll();

        return res.json(planos);
    }

    async store(req, res) {
        const schema = Yup.object().shape({
            descricao: Yup.string().required(),
            valor: Yup.number().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation failed.' });
        }

        const { id, descricao, valor, created_at, updated_at } = await Plano.create(req.body);

        return res.json({ id, descricao, valor, created_at, updated_at });
    }

    async update(req, res) {
        const schema = Yup.object().shape({
            descricao: Yup.string().required(),
            valor: Yup.number().required(),
        });

        const plano = await Plano.findOne({
            where: { id: req.params.id}
        })


        await plano.update(req.body);

        const { id, descricao, valor, created_at, updated_at } = await Plano.findOne({
            where: { id: req.params.id }
        })

        return res.json({ id, descricao, valor, created_at, updated_at });
    }

    async delete(req, res) {

    }
}

export default new PlanoController();
