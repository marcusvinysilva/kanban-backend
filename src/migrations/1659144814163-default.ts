import { MigrationInterface, QueryRunner } from "typeorm";

export class default1659144814163 implements MigrationInterface {
    name = 'default1659144814163'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cards" ("id" SERIAL NOT NULL, "titulo" text NOT NULL, "conteudo" text NOT NULL, "lista" text NOT NULL, CONSTRAINT "PK_5f3269634705fdff4a9935860fc" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "cards"`);
    }

}
