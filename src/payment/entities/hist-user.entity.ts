import {Column, Entity, PrimaryColumn} from 'typeorm'

@Entity ("hist_user")
export class UserHistory {
    @PrimaryColumn({name: "user_id"})
    userId: number;

    @Column("character varying", {name: "user_name", length:50})
    username: string;

    @Column("character varying", {name: "first_name", length:30})
    firstName: string;

    @Column("character varying", {name: "last_name", length:30})
    lastName: string;

    @Column("character varying", {name: "email_id", nullable: true, unique: true, length:50})
    emailId: string;

    @Column("character varying", {name: "password", length:200})
    password: string;

    @Column("character varying", {name: "mobile", length:20})
    mobile: string;

    @Column("bool", {name: "active_status", default: true})
    isActive: boolean;

    @Column("timestamp without time zone", {name: "last_login_dt"})
    lastLoginDt: Date;

    @Column("timestamp without time zone", {name: "created_dt"})
    createdDt: Date;

    @Column("character varying", {name: "createdBy", length:50})
    createdBy: string;

    @PrimaryColumn("timestamp without time zone", {name: "modified_dt"})
    modifiedDt: Date;

    @Column("character varying", {name: "modifiedBy", length:50})
    modifiedBy: string;

}
