import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTrainer1645980795402 implements MigrationInterface {
  name = 'CreateTrainer1645980795402';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "trainers"
                             (
                                 "id"          SERIAL            NOT NULL,
                                 "fullName"    character varying NOT NULL,
                                 "mobile"      character varying NOT NULL,
                                 "description" character varying NOT NULL,
                                 "birthDate"   TIMESTAMP         NOT NULL,
                                 "image"       character varying NOT NULL,
                                 CONSTRAINT "PK_198da56395c269936d351ab774b" PRIMARY KEY ("id")
                             )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "trainers"`);
  }

}
