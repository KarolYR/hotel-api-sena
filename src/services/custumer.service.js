import Custumer from "../models/custumer.model";

export class CostumerService {
  async fetchCostumers() {
    const costumersFound = await Custumer.findAll();
    return costumersFound;
  }

  async fecthCostumer({ idCustumer }) {
    const custumerFound = await Custumer.findByPk(idCustumer);
    return custumerFound;
  }

  async addCustumer({ custumer }) {
    const custumerSaved = await Custumer.create(custumer);
    return custumerSaved;
  }

  async updateCustumer({ idCustumer, custumer }) {
    const custumerFound = await Custumer.findByPk(idCustumer);
    const custumerUpdated = await custumerFound.set(room).save(custumer);
    return custumerUpdated;
  }

  async removeCustumer({ idCustumer }) {
    await Custumer.destroy({
      where: {
        id: idCustumer,
      },
    });
    return true;
  }

}
