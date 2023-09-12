import {Column, Entity, PrimaryColumn} from 'typeorm'

@Entity ("hist_booking")
export class BookingHistory {

    @PrimaryColumn({ name: 'booking_id'})
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

    @PrimaryColumn("timestamp without time zone", {name: "modified_dt"})
    modifiedDt: Date;

    @Column("character varying", {name: "modifiedBy", length:50})
    modifiedBy: string;

}
