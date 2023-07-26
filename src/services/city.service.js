import City from "../models/city.model";

class CityService {
  async fetchCities() {
    const citiesFound = await City.findAll();
    return citiesFound;
  }

  async addCity({ city }) {
    const createdCity = await City.create(city);
    return createdCity;
  }
}

export default CityService;
