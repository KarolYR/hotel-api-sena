import { Service } from "../models/service.model";

export class ServicesService {
  async fetchServices() {
    const servicesFound = await Service.findAll();
    return servicesFound;
  }

  async addService({ service }) {
    const createdService = await Service.create(service);
    return createdService;
  }

  async fetchService({ idService }) {
    const serviceFound = await Service.findByPk(idService);
    return serviceFound;
  }

  async updateService({ idService, service }) {
    const serviceFound = await Service.findByPk(idService);
    const serviceSaved = serviceFound.set(service).save();
    return serviceSaved;
  }

  async removeService({ idService }) {
    await Service.destroy({
      where: {
        id: idService,
      },
    });
    return true;
  }
}
