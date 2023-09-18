import { ApiProperty } from "@nestjs/swagger";

export class PaymentRequest {
    @ApiProperty({description: 'Booking Id'})
    bookingId: number;
    @ApiProperty({description: 'Payment amount'})
    paymentAmount: number;
    @ApiProperty({description: 'Payment method'})
    paymentMethod: number;
}