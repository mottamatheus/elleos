import Services from '../models/Services';
import imagesView from './images_view';

export default {
    render(service: Services) {
        return {
            id: service.id,
            name: service.name,
            latitude: service.latitude,
            longitude: service.longitude,
            about: service.about,
            instructions: service.instructions,
            opening_hours: service.opening_hours,
            open_on_weekends: service.open_on_weekends,
            images: imagesView.renderMany(service.images)
            }
    },

    renderMany(services: Services[]) {
        return services.map(service => this.render(service))
    }
}