import { Router } from "express";
import { CardController } from "../controllers/cards.controller";

const cardRoute = Router();
const cardController = new CardController();

cardRoute.post("/", cardController.create);

export default cardRoute;
