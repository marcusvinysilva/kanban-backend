import { Request, Response } from "express";
import { BadRequestError, NotFoundError } from "../helpers/api-errors";
import { cardRepository } from "../repositories/cards.repository";

export class CardController {
  async create(req: Request, res: Response) {
    const { titulo, conteudo, lista } = req.body;

    if (!titulo || !conteudo || !lista)
      throw new BadRequestError(
        "Você não informou todos os campos para a criação de um card"
      );

    const newCard = cardRepository.create({ titulo, conteudo, lista });

    await cardRepository.save(newCard);

    return res.status(201).send(newCard);
  }

  async getAll(req: Request, res: Response) {
    const cards = await cardRepository.find();

    if (cards.length === 0)
      throw new NotFoundError("Não existem cards cadastrados!");

    return res.send(cards);
  }
}
