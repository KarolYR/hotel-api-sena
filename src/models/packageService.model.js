import { sequelize } from "../config/sql/conectionDb.js";

import Package from "./package.model.js";
import Service from "./service.model.js";

const PackagesServices = sequelize.define("packageService", {
 
});

Package.belongsToMany(Service, { through: PackagesServices, foreignKey: "packageId" , otherKey: "serviceId"});

export default PackagesServices;