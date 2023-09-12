import {Column, Entity, PrimaryColumn} from 'typeorm'

@Entity ("hist_payment")
export class PaymentHistory {

    @PrimaryColumn({ name: 'payment_id'})
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

    @PrimaryColumn("timestamp without time zone", {name: "modified_dt"})
    modifiedDt: Date;

    @Column("character varying", {name: "modifiedBy", length:50})
    modifiedBy: string;

}