// TODO : FALTA SERVICIO DE PACKAGE

import Package from "../models/package.model.js";
import PackagesServices from "../models/packageService.model";
import Service from "../models/service.model";
import Consumption from "../models/consumption.model.js";

export class PackageService {
  async fetchPackages() {
    const packagesFound = await Package.findAll();
    return packagesFound;
  }

  async addPackage() {
    const packageSaved = await Package.create({
      totalXService: 0,
      totalXProducts: 0,
      totalPackage: 0,
    });
    return packageSaved;
  }

  /**
   * @param {idServices} array
   * @param {idProduct} array
   * @param {idPackage} number
   */
  async addServicesToPackage({ idPackage, idServices }) {
    const servicesToAdd = idServices.map((idSer) => ({
      idPackage,
      idService: idSer,
    }));
    await PackagesServices.bulkCreate(servicesToAdd);

    const servicesFound = await Service.findAll({
      where: {
        idService: idServices,
      },
    });

    // total de servicios agregados
    const totalServicesFound = servicesFound
      .map((service) => service.priceService)
      .reduce((total, price) => total + price, 0);

    const packageFound = await Package.findByPk(idPackage);
    // total Services anterior
    const lastTotalServicePackage = packageFound.totalXService;
    // total paquete anterior
    const lastTotalPackage = packageFound.totalPackage;

    packageFound
      .set({
        totalXService: lastTotalServicePackage + totalServicesFound,
        totalPackage: lastTotalPackage + totalServicesFound,
      })
      .save();
  }

  async addProductToPackage({ idPackage, idProducts}) {
    const productsToAdd = idProducts.map((idPro) => ({
      idPackage,
      idProduct: idPro,
    }));
    await Consumption.bulkCreate(productsToAdd);

    const productsFound = await Product.findAll({
      where: {
        idProduct: idProducts,
      },
    });

    const totalProductsFound = productsFound
      .map((product) => product.priceSingleProduct)
      .reduce((totalProd, priceProd, amountProd) => totalProd + (priceProd * amountProd), 0);
    
    const packageFound = await Package.findByPk(idPackage);
    const lastTotalProductPackage = packageFound.totalXProduct;
    const lastTotalPackage = packageFound.totalPackage;

    packageFound
      .set({
        totalXProduct: lastTotalProductPackage + totalProductsFound,
        totalPackage: lastTotalPackage + totalProductsFound,
      })
      .save();
  }

  async fetchPackage({ packageId }) {
    const packageFound = await Package.findByPk(packageId);
    return packageFound;
  }

  async updatePackage({ idPackage, package }) {
    const packageFound = await Package.findByPk(idPackage);
    const packageSaved = await packageFound.set(package).save(package);
    return packageSaved;
  }
}
