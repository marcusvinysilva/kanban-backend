import { Router } from "express";
import { CardController } from "../controllers/cards.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const cardRoute = Router();
const cardController = new CardController();

cardRoute.post("/", authMiddleware, cardController.create);
cardRoute.get("/", authMiddleware, cardController.getAll);
cardRoute.put("/:id", authMiddleware, cardController.update);
cardRoute.delete("/:id", authMiddleware, cardController.remove)

export default cardRoute;
