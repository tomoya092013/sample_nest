import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTask1706584757894 implements MigrationInterface {
    name = 'CreateTask1706584757894'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE \`tasks\` (
                \`id\` varchar(36) NOT NULL,
                \`name\` varchar(255) NOT NULL,
                \`status\` varchar(255) NOT NULL,
                \`created_at\` varchar(255) NOT NULL,
                \`updated_at\` varchar(255) NOT NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE \`tasks\`
        `);
    }

}
