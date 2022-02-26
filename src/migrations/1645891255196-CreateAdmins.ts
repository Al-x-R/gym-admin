import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateAdmins1645891255196 implements MigrationInterface {
    name = 'CreateAdmins1645891255196';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "admins"
                                 (
                                     "id"        SERIAL            NOT NULL,
                                     "adminName" character varying NOT NULL,
                                     "password"  character varying NOT NULL,
                                     "isSuper"   boolean           NOT NULL,
                                     CONSTRAINT "PK_e3b38270c97a854c48d2e80874e" PRIMARY KEY ("id")
                                 )`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "admins"`);
    }

}
