import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("cards")
export class Card {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  titulo: string;

  @Column({ type: "text" })
  conteudo: string;

  @Column({ type: "text" })
  lista: string;
}
