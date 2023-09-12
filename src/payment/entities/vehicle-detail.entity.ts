import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm'
import { User } from './user.entity';

@Entity ("vehicle_detail")
export class VehicleDetail {

    @PrimaryGeneratedColumn({ name: 'vehicle_id'})
    vehicleId: number;

    @Column("integer", {name: "user_id"})
    userId: number;

    @Column("character varying", {name: "reg_num", length:20})
    regNum: number;

    @Column("character varying", {name: "make", length:10})
    make: string;

    @Column("character varying", {name: "model", length:50})
    model: string;

    @ManyToOne(() => User, (user) => user.vehicles, {eager: true})
    @JoinColumn ([{ name: 'user_id', referencedColumnName: 'userId'}])
    user: User;

}

