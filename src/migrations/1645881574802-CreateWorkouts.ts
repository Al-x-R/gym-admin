import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateWorkouts1645881574802 implements MigrationInterface {
    name = 'CreateWorkouts1645881574802'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "workouts"
                                 (
                                     "id"          SERIAL            NOT NULL,
                                     "title"       character varying NOT NULL,
                                     "description" character varying NOT NULL,
                                     "image"       character varying NOT NULL,
                                     "price"       integer           NOT NULL,
                                     "trainer"     character varying NOT NULL,
                                     "createdAt"   TIMESTAMP         NOT NULL DEFAULT now(),
                                     "updatedAt"   TIMESTAMP         NOT NULL DEFAULT now(),
                                     CONSTRAINT "PK_5b2319bf64a674d40237dbb1697" PRIMARY KEY ("id")
                                 )`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "workouts"`);
    }

}
