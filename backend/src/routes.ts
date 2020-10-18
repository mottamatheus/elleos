import { Router } from 'express';
import multer from 'multer';
import ServicesController from './controllers/ServicesController';
import uploadConfig from './config/upload';

const routes = Router();
const upload = multer(uploadConfig);

// PADRÃO MVC
// Model, Views, Controllers

routes.get('/services', ServicesController.index);
routes.get('/services/:id', ServicesController.show);
routes.post('/services', upload.array('images'), ServicesController.create);


export default routes;
