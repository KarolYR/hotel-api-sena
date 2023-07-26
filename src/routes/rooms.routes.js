import { Router } from "express";
import { RoomController } from "../controllers/rooms.controller.js";
import { authRequired } from "../middlewares/auth/validateToken.js";

const router = Router();
const roomController = new RoomController();

router.post("/rooms", authRequired, roomController.postRoom);
router.get("/rooms", authRequired, roomController.getRooms);
router.get("/rooms/:id", authRequired, roomController.getRoom);

export default router;
