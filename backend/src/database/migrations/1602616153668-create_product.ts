import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createProduct1602616153668 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        //realiza alterações no banco de dados (criar dados, tabelas etc)
        await queryRunner.createTable(new Table({
            name: 'services',
            columns: [ 
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
            },
            {
                name: 'name',
                type: 'varchar'
            },
            {
                name: 'latitude',
                type: 'decimal',
                scale: 10,
                precision: 2
            },
            {
                name: 'longitude',
                type: 'decimal',
                scale: 10,
                precision: 2
            },
            {
                name: 'about',
                type: 'text'
            },
            {
                name: 'instructions',
                type: 'text'
            },
            {
                name: 'opening_hours',
                type: 'varchar'
            },
            {
                name: 'open_on_weekends',
                type: 'boolean',
                default: false
            }

            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        //desfazer o que foi feito no up
        await queryRunner.dropTable('services');
    }

}
