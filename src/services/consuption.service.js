import Consumption from "../models/consumption.model.js";



export class ConsumptionService {
  async fetchConsumptions() {
    const consumptionsFound = await Consumption.findAll();
    return consumptionsFound;
  }

  async addConsumption({ consumption }) {
    const createdConsumption = await Consumption.create(consumption);
    return createdConsumption;
  }

  async fetchConsumption({ idConsumption }) {
    const consumptionFound = await Consumption.findByPk(idConsumption);
    return consumptionFound;
  }

  async updateConsumption({ idConsumption, consumption }) {
    const consumptionFound = await Consumption.findByPk(idConsumption);
    const consumptionSaved = consumptionFound.set(consumption).save(consumption);
    return consumptionSaved;
  }
}