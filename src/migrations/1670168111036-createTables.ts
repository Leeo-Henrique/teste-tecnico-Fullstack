import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1670168111036 implements MigrationInterface {
    name = 'createTables1670168111036'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "clients" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying NOT NULL, "password" character varying NOT NULL, "created" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_f1ab7cf3a5714dbc6bb4e1c28a4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "telefones" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "telefone" character varying NOT NULL, "contactId" uuid, CONSTRAINT "PK_fa0a7002d74f18ec1a13ca9a4f2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contacts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, "created" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_b99cd40cfd66a99f1571f4f72e6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "emails" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying NOT NULL, "contactId" uuid, CONSTRAINT "PK_a54dcebef8d05dca7e839749571" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "telefones" ADD CONSTRAINT "FK_878b1fd44acb2e6d248ecdf2dc0" FOREIGN KEY ("contactId") REFERENCES "contacts"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "emails" ADD CONSTRAINT "FK_43abc580d6e98a6e8eb96ffe86d" FOREIGN KEY ("contactId") REFERENCES "contacts"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "emails" DROP CONSTRAINT "FK_43abc580d6e98a6e8eb96ffe86d"`);
        await queryRunner.query(`ALTER TABLE "telefones" DROP CONSTRAINT "FK_878b1fd44acb2e6d248ecdf2dc0"`);
        await queryRunner.query(`DROP TABLE "emails"`);
        await queryRunner.query(`DROP TABLE "contacts"`);
        await queryRunner.query(`DROP TABLE "telefones"`);
        await queryRunner.query(`DROP TABLE "clients"`);
    }

}
