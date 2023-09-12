import {Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn} from 'typeorm'
import { Booking } from './booking.entity';

@Entity ("payment")
export class Payment {

    @PrimaryGeneratedColumn({ name: 'payment_id'})
    paymentId: number;

    @Column("integer", {name: "booking_id"})
    bookingId: number;
  
    @Column("character varying", {name: "payment_status", length:50})
    paymentStatus: string;

    @Column("integer", {name: "payment_amount"})
    paymentAmount: number;

    @Column("integer", {name: "payment_method"})
    paymentMethod: number;

    @Column("timestamp without time zone", {name: "created_dt"})
    createdDt: Date;

    @Column("character varying", {name: "createdBy", length:50})
    createdBy: string;

    @Column("timestamp without time zone", {name: "modified_dt"})
    modifiedDt: Date;

    @Column("character varying", {name: "modifiedBy", length:50})
    modifiedBy: string;

    @ManyToOne(() => Booking)
    @JoinColumn([{ name: 'booking_id', referencedColumnName: 'bookingId'}])
    booking: Booking;

}