import {Column, Entity, JoinColumn, ManyToOne, PrimaryColumn} from 'typeorm'
import { Role } from './role.entity';
import { User } from './user.entity';

@Entity ("hist_user_role")
export class UserRoleHistory {
    @PrimaryColumn({name: "user_role_id"})
    userRoleId: number;

    @Column("integer", {name: "user_id"})
    userId: number;

    @Column("integer", {name: "role_id"})
    roleId: number;

    @Column("bool", {name: "active_status", default: true})
    isActive: boolean;

    @Column("timestamp without time zone", {name: "created_dt"})
    createdDt: Date;

    @Column("character varying", {name: "createdBy", length:50})
    createdBy: string;

    @PrimaryColumn("timestamp without time zone", {name: "modified_dt"})
    modifiedDt: Date;

    @Column("character varying", {name: "modifiedBy", length:50})
    modifiedBy: string;

}
