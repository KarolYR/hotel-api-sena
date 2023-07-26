import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";

// routes
import roomRoutes from "./routes/rooms.routes.js";
import authRoutes from "./routes/outh.routes.js";
import reservationRoutes from "./routes/reservation.routes.js";

const app = express();


// Midlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Routes

app.use("/api/hotel/v1", roomRoutes )
app.use("/api/hotel/v1", authRoutes )
app.use("/api/hotel/v1", reservationRoutes )



export default app;
