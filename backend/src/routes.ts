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
/*

	"name": "2 AlÔ Galisteu",
	"latitude": -27.21044339,
	"longitude": -49.629111,
	"about": "sobre mimiim",
	"instructions": "lave as mãos",
	"opening_hours": "8h até 21h",
	"open_on_weekends": true
*/