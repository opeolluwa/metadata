import { MigrationInterface, QueryRunner, Table } from "typeorm"
import { UserAccountStatus } from "./../models/UserInformation"
export class userInformationTable1672615205407 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        //create table 
        const questionnaireResponseTable = new Table({
            name: "metadata_user_information",
            columns: [
                {
                    name: "id",
                    type: "varchar(36)", //uuid
                    isPrimary: true, //set as primary key
                    isNullable: false,
                },
                {
                    name: "username",
                    type: "text",
                    isNullable: false,
                    isUnique: true
                },
                {
                    name: "password",
                    type: "text",
                    isNullable: false
                },
                {
                    name: "email",
                    isNullable: false,
                    isUnique: true,
                    type: "text"
                },
                {
                    name: "accountStatus",
                    isNullable: false,
                    type: "text"
                },
            ]
        })
        //true -> create table if not exists
        await queryRunner.createTable(questionnaireResponseTable, true);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // true -> drop table if exist
        await queryRunner.dropTable("metadata_user_information", true)
    }

}
