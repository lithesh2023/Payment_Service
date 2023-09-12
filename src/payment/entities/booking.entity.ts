import {Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from 'typeorm'
import { User } from './user.entity';
import { ParkingSlot } from './parking-slot.entity';
import { VehicleDetail } from './vehicle-detail.entity';
import { Payment } from './payment.entity';

@Entity ("booking")
export class Booking {

    @PrimaryGeneratedColumn({ name: 'booking_id'})
    bookingId: number;

    @Column("integer", {name: "user_id"})
    userId: number;

    @Column("integer", {name: "parking_slot_id"})
    parkingSlotId: number;

    @Column("timestamp without time zone", {name: "from_dt"})
    fromDt: Date;

    @Column("timestamp without time zone", {name: "to_dt"})
    toDt: Date;

    @Column("decimal", {name: "rental_price"})
    rentalPrice: number;

    @Column("decimal", {name: "extra_price"})
    extraPrice: number;

    @Column("decimal", {name: "discount_price"})
    discountPrice: number;

    @Column("decimal", {name: "final_price"})
    finalPrice: number;

    @Column("decimal", {name: "advance_paid"})
    advancePaid: number;

    @Column("character varying", {name: "booking_status", length:50})
    bookingStatus: string;

    @Column("character varying", {name: "vehicle_id"})
    vehicleId: number;

    @Column("timestamp without time zone", {name: "created_dt"})
    createdDt: Date;

    @Column("character varying", {name: "createdBy", length:50})
    createdBy: string;

    @Column("timestamp without time zone", {name: "modified_dt"})
    modifiedDt: Date;

    @Column("character varying", {name: "modifiedBy", length:50})
    modifiedBy: string;

    @ManyToOne(() => User, (user) => user.bookings, {eager: true})
    @JoinColumn ([{ name: 'user_id', referencedColumnName: 'userId'}])
    user: User;

    @OneToOne(() => ParkingSlot)
    @JoinColumn([{ name: 'parking_slot_id', referencedColumnName: 'parkingSlotId'}])
    parkingSlot: ParkingSlot;

    @OneToOne(() => VehicleDetail)
    @JoinColumn([{ name: 'vehicle_id', referencedColumnName: 'vehicleId'}])
    vehicle: VehicleDetail;

    @OneToMany(() => Payment, (payment) => payment.booking)
    payments: Payment[];

}
