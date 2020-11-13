import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1603198114442 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: 'images',
        columns:[
          {
            name: 'id',
            type: 'integer',
            unsigned: true, //SEMPRE SERÁ POSITIVO
            isPrimary: true, //MINHA PRIMARY KEY
            isGenerated: true, //COLUNA SERÁ GERADA AUTOMATICAMENTE
            generationStrategy: 'increment', //SEMPRE SE AUTO INCREMENTANDO
          },
          {
            name: 'path',
            type: 'varchar',
          },
          {
            name: 'orphanage_id',
            type: 'integer',
          }
        ],
        foreignKeys: [
          {
            name: 'ImageOrphanage',
            columnNames: ['orphanage_id'],
            referencedTableName: 'orphanages',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          }
        ]
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('image')
    }

}
