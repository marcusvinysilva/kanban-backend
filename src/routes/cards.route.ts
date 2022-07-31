import { Router } from "express";
import { CardController } from "../controllers/cards.controller";

const cardRoute = Router();
const cardController = new CardController();

cardRoute.post("/", cardController.create);
cardRoute.get("/", cardController.getAll);
cardRoute.put("/:id", cardController.update)

export default cardRoute;
