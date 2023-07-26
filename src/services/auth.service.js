import { comparePass, encrypt } from "../utils/bcrypt.js";
import { createToken } from "../utils/jwt.js";
import UserHotel from "../models/userHotel.model.js";

export class AuthService {
  async registerUser({ userHotel }) {
    const { passwordUser, ...restUser } = userHotel;

    const userFound = await UserHotel.findOne({
      where: {
        emailUser: userHotel.emailUser,
      },
    });

    if (userFound) return "ALLREADY REGISTERED";

    const passEncrypted = await encrypt(passwordUser);

    const userCreated = await UserHotel.create({
      passwordUser: passEncrypted,
      ...restUser,
    });

    return userCreated;
  }

  async logiUser({ emailUser, passwordUser }) {
    console.log({ emailUser, passwordUser });
    const userFound = await UserHotel.findOne({
      where: {
        emailUser: emailUser,
      },
    });
    const isOkPass = await comparePass(passwordUser, userFound.passwordUser);

    if (!userFound || !isOkPass) return "CREDENTIALS_INCORRET";

    const token = await createToken(userFound.idUser);
    return token;
  }
}
