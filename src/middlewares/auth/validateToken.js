import { verifyToken } from "../../utils/jwt.js";

export const authRequired = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      return res
        .status(401)
        .json({ message: "no token, authorization denied" });
    }

    const payload = await verifyToken(token);

    if (!payload) {
      return res
        .status(401)
        .json({ message: "token invalid, authorization denied" });
    }
    
    req.idUser = payload.id;
    next();
  } catch (error) {
    res.status(501).json(error);
  }
};
