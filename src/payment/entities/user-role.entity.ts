import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm'
import { Role } from './role.entity';
import { User } from './user.entity';

@Entity ("user_role")
export class UserRole {
    @PrimaryGeneratedColumn({name: "user_role_id"})
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

    @Column("timestamp without time zone", {name: "modified_dt"})
    modifiedDt: Date;

    @Column("character varying", {name: "modifiedBy", length:50})
    modifiedBy: string;

    @ManyToOne(() => Role)
    @JoinColumn([{ name: 'role_id', referencedColumnName: 'roleId'}])
    role: Role;

    @ManyToOne(() => User, (user) => user.userRoles, {eager: true})
    @JoinColumn ([{ name: 'user_id', referencedColumnName: 'userId'}])
    user: User;
}
