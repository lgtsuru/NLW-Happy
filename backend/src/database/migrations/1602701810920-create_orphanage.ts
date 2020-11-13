import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanage1602701810920 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
      //REALIZAR ALTERACOES
      //CRIAR TABELA, CRIA UM NOVO CAMPO. DELETAR ALGUM CAMPO
      await queryRunner.createTable(new Table({
        name: 'orphanages',
        columns: [
          {//CADA NOVO ORFANATO QUE FOR INCLUIDO, UM NOVO REGISTRO SERÁ FEITO
            name: 'id',
            type: 'integer',
            unsigned: true, //SEMPRE SERÁ POSITIVO
            isPrimary: true, //MINHA PRIMARY KEY
            isGenerated: true, //COLUNA SERÁ GERADA AUTOMATICAMENTE
            generationStrategy: 'increment', //SEMPRE SE AUTO INCREMENTANDO
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'latitude',
            type: 'decimal',
            scale: 10,
            precision: 2,
          },
          {
            name: 'longitude',
            type: 'decimal',
            scale: 10,
            precision: 2,
          },
          {
            name: 'about',
            type: 'text',            
          },
          {
            name: 'instructions',
            type: 'text',            
          },
          {
            name: 'opening_hours',
            type: 'varchar',
          },
          {
            name: 'open_on_weekends',
            type: 'boolean',
            default: false,            
          },

        ],
      }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
      //DESFAZER O QUE FOI FEITO NO UP
      await queryRunner.dropTable('orphanages');
  }

}
