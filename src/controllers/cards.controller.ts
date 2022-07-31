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
      throw new NotFoundError("Não existem cards cadastrados");

    return res.send(cards);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const card = await cardRepository.findOneBy({ id: +id });
    if (!card) throw new NotFoundError("Card não encontrado com esse id");

    const { titulo, conteudo, lista } = req.body;
    if (!titulo || !conteudo || !lista)
      throw new BadRequestError(
        "Você não informou todos os campos para a atualização do card"
      );

    const cardUpdate = cardRepository.merge(card, req.body);

    const cardUpdated = await cardRepository.save(cardUpdate);

    return res.send(cardUpdated);
  }

  async remove(req: Request, res: Response) {
    const { id } = req.params;
    const card = await cardRepository.findOneBy({ id: +id });
    if (!card) throw new NotFoundError("Card não encontrado com esse id");

    await cardRepository.delete(id);

    const cards = await cardRepository.find();

    return res.send(cards);
  }
}
