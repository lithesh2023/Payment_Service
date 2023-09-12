import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm'
import { User } from './user.entity';

@Entity ("address")
export class Address {

    @PrimaryGeneratedColumn({ name: 'addr_id'})
    addrId: number;

    @Column("integer", {name: "user_id"})
    userId: number;

    @Column("character varying", {name: "address_line1", length:100})
    addressLine1: string;

    @Column("character varying", {name: "address_line2", length:100})
    addressLine2: string;

    @Column("character varying", {name: "city", length:100})
    city: string;

    @Column("character varying", {name: "state", length:100})
    state: string;

    @Column("character varying", {name: "pincode", length:10})
    pinCode: string;

    @Column("character varying", {name: "country", length:100})
    country: string;

    @Column("character varying", {name: "coordinates", length:60})
    coordinates: string;

    @Column("character varying", {name: "addr_type", length:100})
    addrType: string;

    @Column("timestamp without time zone", {name: "created_dt"})
    createdDt: Date;

    @Column("character varying", {name: "createdBy", length:50})
    createdBy: string;

    @Column("timestamp without time zone", {name: "modified_dt"})
    modifiedDt: Date;

    @Column("character varying", {name: "modifiedBy", length:50})
    modifiedBy: string;

    @ManyToOne(() => User, (user) => user.addresses, {eager: true})
    @JoinColumn ([{ name: 'user_id', referencedColumnName: 'userId'}])
    user: User;

}
