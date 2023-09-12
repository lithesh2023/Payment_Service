import {Column, Entity, PrimaryColumn} from 'typeorm'

@Entity ("role")
export class Role {

    @PrimaryColumn('integer', {primary: true, name: "role_id"})
    roleId: number;

    @Column("character varying", {name: "role_name", length:20, unique: true})
    roleName: string;

    @Column("character varying", {name: "role_desc", length:100})
    roleDesc: string;

}
