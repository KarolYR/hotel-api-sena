import app from "./app.js";
import "dotenv/config.js";
import { sequelize } from "./config/sql/conectionDb.js";

// import "./models/package.model.js"
// import "./models/consumption.model.js";
// import "./models/city.model.js";
// import "./models/userRol.model.js";
// import "./models/custumer.model.js";
// import "./models/service.model.js"
// import "./models/packageService.model.js"



const PORT = process.env.PORT || 3500;
const main = async () => {
  try {
    await sequelize.sync({ force: false });
    console.log(" *********** conexion exitosa 🧙🦄 ************ ");
    app.listen(PORT, () => {
      console.log("server on port", PORT);
    });
  } catch (error) {
    console.log("********** conexion fallida 💀 *********** ");
    console.log(error);
  }
};

main();
