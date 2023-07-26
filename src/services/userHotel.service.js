import UserHotel from "../models/userHotel.model";

export class UserHotelService {
  //TODO: falta
  async fetchUsersHotel() {
    const userHotelsFound = await UserHotel.findAll();
    return userHotelsFound;
  }

  //TODO: falta
  async addUserHotel({ userHotel }) {
    const createdUserHotel = await UserHotel.create(userHotel);
    return createdUserHotel;
  }

  // TODO: falta
  async fetchUserHotel({ idUserHotel }) {
    const userHotelFound = await UserHotel.findByPk(idUserHotel);
    return userHotelFound;
  }

  //TODO: falta
  async updateUserHotel({ idUserHotel, userHotel }) {
    const userHotelFound = await UserHotel.findByPk(idUserHotel);
    const userHotelSaved = userHotelFound.set(userHotel).save(userHotel);
    return userHotelSaved;
  }
}
