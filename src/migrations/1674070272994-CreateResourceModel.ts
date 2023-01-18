import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateResourceModel1674070272994 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        //create table 
        const questionnaireResponseTable = new Table({
            name: "metadata_resource_information",
            columns: [
                {
                    name: "id",
                    type: "varchar(36)", //uuid
                    isPrimary: true, //set as primary key
                    isNullable: false,
                },
                {
                    name: "name",
                    type: "text",
                    isNullable: false,
                },
                {
                    name: "description",
                    type: "text",
                    isNullable: false
                },
                {
                    name: "categories",
                    isNullable: false,
                    type: "text",
                    isArray: true
                },
                {
                    name: "url",
                    isNullable: false,
                    type: "text",
                    isUnique: true
                },
            ]
        })
        //true -> create table if not exists
        await queryRunner.createTable(questionnaireResponseTable, true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("metadata_resource_information", true)
    }

}
