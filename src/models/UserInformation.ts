import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"
export enum UserAccountStatus {
    UNVERIFIED = "unverified",
    VERIFIED = "verified",
    ACTIVE = "active",
    SUSPENDED = "suspended",
    DEACTIVATED = "deactivated",
}

@Entity("metadata_user_information")
export class UserInformation {
    @PrimaryGeneratedColumn("uuid")
    id: string | undefined

    @Column({ type: "varchar", nullable: true })
    username: string | undefined

    @Column({ type: "varchar" })
    email: string | undefined

    @Column({ type: "varchar", select: false })
    password: string | undefined


    @Column({ type: "varchar", default: "unverified" })
    accountStatus: string | undefined
}
