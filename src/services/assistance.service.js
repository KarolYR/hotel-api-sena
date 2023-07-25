import Assistance from "../models/assistance.model.js";


export class AssistanceService {
  async fetchAssistances() {
    const assistancesFound = await Assistance.findAll();
    return assistancesFound;
  }

  async addAssistance({ assistance }) {
    const createdAssistance = await Assistance.create(assistance);
    return createdAssistance;
  }

  async fetchAssistance({ idAssistance }) {
    const assistanceFound = await Assistance.findByPk(idAssistance);
    return assistanceFound;
  }

  async updateAssistance({ idAssistance, assistance }) {
    const assistanceFound = await Assistance.findByPk(idAssistance);
    const assistanceSaved = assistanceFound.set(assistance).save(assistance);
    return assistanceSaved;
  }
}