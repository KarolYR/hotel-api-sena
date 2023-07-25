import { UserHotelService } from "../services/userHotel.service.js";
const userHotelService = new UserHotelService();

export class UserHotelController {
  async postUserHotel(req, res) {
    try {
      const userHotel = req.body
      const createdUserHotel = await userHotelService.addUserHotel(userHotel);
      res.status(200).json(createdUserHotel);
    } catch (error) {
      res.status(404).json({ error });
    }
  }

  async getUserHotel(req, res) {
    try {
      const idUserHotel = req.params.id;
      const userHotelFound = await userHotelService.fetchUserHotel({ idUserHotel });
      res.send(userHotelFound);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async getUsersHotel(req, res) {
    try {
      const UsersHotelFound = await userHotelService.fetchUsersHotel();
      res.status(200).json(UsersHotelFound);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async putUserHotel(req, res) {
    try {
      const idUserHotel = req.params.id
      const userHotel = req.body
      const userHotelUpdated = await userHotelService.updateUserHotel({idUserHotel, userHotel});
      res.status(200).json(userHotelUpdated);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async deleteUserHotel(req, res) {
    try {
      const idUserHotel = req.params.id;
      const userHotel = req.body
      await userHotelService.updateUserHotel(idUserHotel,userHotel);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

}
