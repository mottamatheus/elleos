
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Services from '../models/Services';
import serviceView from '../views/services_view';
import * as Yup from 'yup';

export default {
    async index(request: Request, response: Response) {
        const servicesRepository = getRepository(Services);

        const services = await servicesRepository.find({
            relations: ['images']
        });

        return response.json(serviceView.renderMany(services));

    },

    async show(request: Request, response: Response) {
        const { id } = request.params; 

        const servicesRepository = getRepository(Services);

        const service = await servicesRepository.findOneOrFail(id, {
            relations: ['images']
        });

        return response.json(serviceView.render(service));
    },

    async create(request: Request, response: Response) {
        const {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends
        } = request.body;
    
        const servicesRepository = getRepository(Services);

        const requestImages = request.files as Express.Multer.File[];
        const images = requestImages.map(image => {
            return { path: image.filename }
        })

        const data = {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends: open_on_weekends === 'true',
            images
        }

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            latitude: Yup.number().required(),
            longitude: Yup.number().required(),
            about: Yup.string().required().max(300),
            instructions: Yup.string().required(),
            opening_hours: Yup.string().required(),
            open_on_weekends: Yup.boolean().required(),
            images: Yup.array(
                Yup.object().shape({
                    path: Yup.string().required()
            }))
        })


        await schema.validate(data, {
            abortEarly: false
        })

        const service = servicesRepository.create(data);
    
        await servicesRepository.save(service);
    
        return response.status(201).json(service);
    }
}