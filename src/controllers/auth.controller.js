import { AuthService } from "../services/auth.service.js";
import UserHotel from "../models/userHotel.model.js";

const authService = new AuthService();

export class AuthController {
  async register(req, res) {
    try {
      const isOk = await authService.registerUser({
        userHotel: { ...req.body, activeUser: 1 },
      });

      if (isOk === "ALLREADY REGISTERED")
        return res.status(404).json({ msg: isOk });

      res.status(200).json(isOk);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async login(req, res) {
    try {
      const { emailUser, passwordUser } = req.body;
      const token = await authService.logiUser({ emailUser, passwordUser });

      if (token === "CREDENTIALS_INCORRET") {
        return res.status(403).json({ token });
      }

      res.cookie("token", token);
      res.status(200).json({ message: "autenticado correctamete" });
    } catch (error) {
      res.status(404).json({ error });
    }
  }

  async logOut(req, res) {
    res.cookie("token", "", {
      expires: new Date(0),
    });
    res.sendStatus(200);
  }

  async profile(req, res) {
    try {
      const userFound = await UserHotel.findByPk(req.user.id);
      if (!userFound) return res.status(400).json({ msg: "User not found" });
      const { password: _, ...restUser } = userFound;
      res.status(200).json(restUser);
    } catch (error) {
      res.status(404).json({ error });
    }
  }
}
