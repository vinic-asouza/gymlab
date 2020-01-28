/* eslint-disable no-unused-vars */
import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import PessoaController from './app/controllers/PessoaController';
import PlanoController from './app/controllers/PlanoController';

import FileController from './app/controllers/FileController';
import NotificationController from './app/controllers/NotificationController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/sessions', SessionController.store);
routes.post('/users', UserController.store);

routes.use(authMiddleware);

routes.get('/pessoas', PessoaController.index);
routes.get('/pessoas/:id', PessoaController.find);
routes.post('/pessoas', PessoaController.store);
routes.put('/pessoas/:id', PessoaController.update);

routes.get('/planos', PlanoController.index);
routes.get('/planos/:id', PlanoController.find);
routes.post('/planos', PlanoController.store);
routes.put('/planos/:id', PlanoController.update);

routes.put('/users', UserController.update);

routes.post('/files', upload.single('file'), FileController.store);

routes.get('/notifications', NotificationController.index);
routes.put('/notifications/:id', NotificationController.update);

export default routes;
