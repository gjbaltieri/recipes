import { MigrationInterface, QueryRunner } from "typeorm";

export class default1677779576894 implements MigrationInterface {
    name = 'default1677779576894'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "recipe" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "category" character varying NOT NULL, "preparation_time" integer NOT NULL, "servings" integer NOT NULL, CONSTRAINT "PK_e365a2fedf57238d970e07825ca" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "instruction" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying NOT NULL, "order" character varying NOT NULL, "tip" character varying NOT NULL, "recipeIdId" integer, CONSTRAINT "REL_d549362f7edccb89a5182a14ee" UNIQUE ("recipeIdId"), CONSTRAINT "PK_dd8def68dee37e3f878d0f8673a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "review" ("id" SERIAL NOT NULL, "rating" integer NOT NULL, "comment" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "recipeIdId" integer, CONSTRAINT "PK_2e4299a343a81574217255c00ca" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "ingredientes" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "quantity" character varying NOT NULL, "measure" character varying NOT NULL, "recipeIdId" integer, CONSTRAINT "REL_b3b1eb34a48f116290baabbdde" UNIQUE ("recipeIdId"), CONSTRAINT "PK_8901a565cc70a661928d2011f2f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "instruction" ADD CONSTRAINT "FK_d549362f7edccb89a5182a14ee1" FOREIGN KEY ("recipeIdId") REFERENCES "recipe"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "review" ADD CONSTRAINT "FK_6b1f68ee8c80f12bc5f00d24aa2" FOREIGN KEY ("recipeIdId") REFERENCES "recipe"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ingredientes" ADD CONSTRAINT "FK_b3b1eb34a48f116290baabbdde6" FOREIGN KEY ("recipeIdId") REFERENCES "recipe"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ingredientes" DROP CONSTRAINT "FK_b3b1eb34a48f116290baabbdde6"`);
        await queryRunner.query(`ALTER TABLE "review" DROP CONSTRAINT "FK_6b1f68ee8c80f12bc5f00d24aa2"`);
        await queryRunner.query(`ALTER TABLE "instruction" DROP CONSTRAINT "FK_d549362f7edccb89a5182a14ee1"`);
        await queryRunner.query(`DROP TABLE "ingredientes"`);
        await queryRunner.query(`DROP TABLE "review"`);
        await queryRunner.query(`DROP TABLE "instruction"`);
        await queryRunner.query(`DROP TABLE "recipe"`);
    }

}
