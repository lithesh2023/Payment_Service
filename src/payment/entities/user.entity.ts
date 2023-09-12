import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm'
import { UserRole } from './user-role.entity';
import { Address } from './address.entity';
import { Booking } from './booking.entity';
import { VehicleDetail } from './vehicle-detail.entity';

@Entity ("user")
export class User {
    @PrimaryGeneratedColumn({name: "user_id"})
    userId: number;

    @Column("character varying", {name: "user_name", length:50, unique: true})
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

    @Column("timestamp without time zone", {name: "modified_dt"})
    modifiedDt: Date;

    @Column("character varying", {name: "modifiedBy", length:50})
    modifiedBy: string;

    @OneToMany(() => Address, (address) => address.user)
    addresses: Address[]; 

    @OneToMany(() => UserRole, (userRole) => userRole.user)
    userRoles: UserRole[];

    @OneToMany(() => Booking, (booking) => booking.user)
    bookings: Booking[];
    

    @OneToMany(() => VehicleDetail, (vehicle) => vehicle.user)
    vehicles: VehicleDetail[];

}
