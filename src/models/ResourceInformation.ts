import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"
@Entity("metadata_user_information")
export class UserInformation {
    @PrimaryGeneratedColumn("uuid")
    id: string | undefined

    @Column("text")
    name: string | undefined

    @Column({ type: "array" })
    categories: string[] | undefined

    @Column("text")
    description: string | undefined

    @Column("text")
    url: string | undefined
}