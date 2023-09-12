import {Column, Entity} from 'typeorm'

@Entity ("parking_slot")
export class ParkingSlot {

    @Column('integer', {primary: true, name: "parking_slot_id"})
    parkingSlotId: number;

    @Column("decimal", {name: "price"})
    price: number;

    @Column("character varying", {name: "grade", length:20, unique: true})
    grade: string;

}
