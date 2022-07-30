import { Request, Response } from "express";
import { cardRepository } from "../repositories/cards.repository";

export class CardController {
  async create(req: Request, res: Response) {
    const { titulo, conteudo, lista } = req.body;

    if (!titulo || !conteudo || !lista)
      return res.status(400).send({
        message: "Você não informou todos os campos para a criação de um card",
      });

    try {
      const newCard = cardRepository.create({ titulo, conteudo, lista });

      await cardRepository.save(newCard);

      return res.status(201).send(newCard);
    } catch (error) {
      console.log(error);
      return res.status(500).send({ message: "Internal Server Error" });
    }
  }
}
